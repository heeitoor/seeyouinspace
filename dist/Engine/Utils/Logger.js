"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
class Logger {
    constructor() {
        console.log(230498290);
    }
    static log() {
        const log = winston_1.default.createLogger({
            // level: 'info',
            // format: winston.format.json(),
            transports: [
                new winston_1.default.transports.Console({
                    format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.simple()),
                }),
            ],
        });
        log.silent = true;
        log.on('data', () => {
            console.log('recebido');
        });
        log.error('oisdoifsdf');
        log.info('teste');
    }
}
exports.default = Logger;
