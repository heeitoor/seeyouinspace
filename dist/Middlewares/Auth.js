"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Token_1 = require("../Errors/Token");
class AuthMiddleware {
    constructor(order) {
        this.order = order;
    }
    handler(req, res, next) {
        const { authorization } = req.headers;
        const { path } = req;
        if (!path.startsWith('/token')) {
            try {
                jsonwebtoken_1.default.verify(authorization, process.env.JWT_SECRET);
            }
            catch (_a) {
                throw new Token_1.AuthorizationError();
            }
        }
        next();
    }
}
exports.default = AuthMiddleware;
