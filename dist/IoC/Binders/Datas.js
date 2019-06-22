"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Types_1 = require("../Types");
const Redis_1 = __importDefault(require("../../Data/Redis"));
const bind = (container) => {
    container.bind(Types_1.types.RedisData).to(Redis_1.default);
};
exports.bind = bind;
