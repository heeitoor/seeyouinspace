"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorBase_1 = __importDefault(require("../Engine/Utils/ErrorBase"));
class AuthorizationError extends ErrorBase_1.default {
    constructor() {
        super('Forbidden...');
    }
}
exports.AuthorizationError = AuthorizationError;
class MasterKeyError extends ErrorBase_1.default {
    constructor() {
        super('Error matching keys...');
    }
}
exports.MasterKeyError = MasterKeyError;
