"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorBase_1 = __importDefault(require("../Engine/Utils/ErrorBase"));
class ErrorMiddleware {
    static handler(err, req, res, next) {
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
    }
}
exports.default = ErrorMiddleware;
