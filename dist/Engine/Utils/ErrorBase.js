"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorBase extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}
exports.default = ErrorBase;
