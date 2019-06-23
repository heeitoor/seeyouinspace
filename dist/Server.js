"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const Enums_1 = require("./Engine/Utils/Enums");
const ErrorBase_1 = __importDefault(require("./Engine/Utils/ErrorBase"));
class Server {
    constructor(routers, middlewares) {
        this.server = express_1.default();
        this.server.use(body_parser_1.default.json());
        this.setupMiddlewares(middlewares);
        routers.forEach((router) => {
            this.server.use(router.path, router.register());
        });
        this.setupMiddlewares(middlewares, false);
        // middleware de erros
        this.server.use((err, req, res, next) => {
            if (err instanceof ErrorBase_1.default) {
                let { code, message } = err;
                code = code ? code : 400;
                res.status(code).send({
                    message,
                });
            }
            else {
                res.status(500).send('Internal error.');
            }
            next();
        });
    }
    start(port = '5000') {
        this.server.listen(port, () => {
            console.log(`service starting on http://localhost:${port}`);
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
