"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cron_1 = __importDefault(require("cron"));
const moment_1 = __importDefault(require("moment"));
const cronJob = new cron_1.default.CronJob('*/1 * * * *', () => {
    console.log('moment()', moment_1.default());
    console.log('moment().utc()', moment_1.default().utc());
});
cronJob.start();
// new Server(
//   [
//     container.get<RedisRouter>(types.RedisRouter),
//     container.get<TokenRouter>(types.TokenRouter),
//   ],
//   [new AuthMiddleware(MiddlewareOrder.Begin)],
// ).start(process.env.PORT);
