import 'reflect-metadata';
import { container } from './IoC/Container';
import RedisRouter from './Routes/Redis';
import { types } from './IoC/Types';
import Server from './Server';
import AuthMiddleware from './Middlewares/Auth';
import { MiddlewareOrder } from './Engine/Utils/Enums';
import TokenRouter from './Routes/Token';

import cron from 'cron';
import moment from 'moment';

const cronJob = new cron.CronJob('*/1 * * * *', () => {
  console.log('moment()', moment());
  console.log('moment().utc()', moment().utc());
});

cronJob.start();

// new Server(
//   [
//     container.get<RedisRouter>(types.RedisRouter),
//     container.get<TokenRouter>(types.TokenRouter),
//   ],
//   [new AuthMiddleware(MiddlewareOrder.Begin)],
// ).start(process.env.PORT);
