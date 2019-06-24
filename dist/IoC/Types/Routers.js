"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routers = {
    RedisRouter: Symbol.for('IRedisRouter'),
    TokenRouter: Symbol.for('ITokenRouter'),
    RabbitMQRouter: Symbol.for('IRabbitMQRouter'),
};
exports.routers = routers;
