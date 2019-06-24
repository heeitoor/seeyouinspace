"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Container_1 = require("./IoC/Container");
const Types_1 = require("./IoC/Types");
const Server_1 = __importDefault(require("./Server"));
// import cron from 'cron';
// import moment from 'moment';
// const cronJob = new cron.CronJob('* * * * * *', () => {
//   console.log('moment()', moment());
//   console.log('moment().utc()', moment().utc());
// });
// cronJob.start();
new Server_1.default([
    //container.get<RedisRouter>(types.RedisRouter),
    Container_1.container.get(Types_1.types.TokenRouter),
    Container_1.container.get(Types_1.types.RabbitMQRouter),
], [ /*new AuthMiddleware(MiddlewareOrder.Begin)*/]).start(process.env.PORT);
