"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Enums_1 = require("./Engine/Utils/Enums");
const body_parser_1 = __importDefault(require("body-parser"));
class Server {
    constructor(routers, middlewares) {
        this.server = express_1.default();
        this.server.use(body_parser_1.default.json());
        this.setupMiddlewares(middlewares, true);
        routers.forEach((router) => {
            this.server.use(router.path, router.register());
        });
        this.setupMiddlewares(middlewares, false);
        this.server.use((req, res, next) => {
            console.log('oisfiosdf');
            next();
        });
    }
    start(port = 5000) {
        this.server.listen(port, () => {
            console.log(`service starting on http://localhost:${port}`);
        });
    }
    setupMiddlewares(middlewares, begining = true) {
        const beginMiddlewares = middlewares.filter((x) => begining && x.order === Enums_1.MiddlewareOrder.Begin);
        beginMiddlewares.forEach((middleware) => {
            this.server.use(middleware.handler);
        });
    }
}
exports.default = Server;
