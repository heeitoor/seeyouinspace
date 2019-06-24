"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
class GlobalMiddleware {
    static register(server) {
        server.use(body_parser_1.default.json());
    }
}
exports.default = GlobalMiddleware;
