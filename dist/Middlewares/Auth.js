"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthMiddleware {
    constructor(order) {
        this.order = order;
    }
    handler(req, res, next) {
        console.log('Auth middleware...');
        next();
    }
}
exports.default = AuthMiddleware;
