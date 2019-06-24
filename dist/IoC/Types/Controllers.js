"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers = {
    RedisController: Symbol.for('IRedisController'),
    TokenController: Symbol.for('ITokenController'),
    RabbitMQController: Symbol.for('IRabbitMQController'),
};
exports.controllers = controllers;
