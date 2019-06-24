"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Enums_1 = require("./Engine/Utils/Enums");
const Error_1 = __importDefault(require("./Middlewares/Error"));
const Global_1 = __importDefault(require("./Middlewares/Global"));
class Server {
    constructor(routers, middlewares) {
        this.server = express_1.default();
        this.setup(routers, middlewares);
    }
    start(port = '5000') {
        this.server.listen(port, () => {
            console.log(`service starting on http://localhost:${port}`);
        });
    }
    setup(routers, middlewares) {
        Global_1.default.register(this.server);
        this.setupMiddlewares(middlewares);
        this.setupRouters(routers);
        this.setupMiddlewares(middlewares, false);
        this.server.use(Error_1.default.handler);
    }
    setupRouters(routers) {
        routers.forEach((router) => {
            this.server.use(router.path, router.register());
        });
    }
    setupMiddlewares(middlewares, begining = true) {
        const beginMiddlewares = middlewares.filter((x) => begining
            ? x.order === Enums_1.MiddlewareOrder.Begin
            : x.order === Enums_1.MiddlewareOrder.End);
        beginMiddlewares.forEach((middleware) => {
            this.server.use(middleware.handler);
        });
    }
}
exports.default = Server;
