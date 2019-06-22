import 'reflect-metadata';
import { container } from './IoC/Container';
import RedisRouter from './Routes/Redis';
import { types } from './IoC/Types';
import Server from './Server';
import AuthMiddleware from './Middlewares/Auth';
import { MiddlewareOrder } from './Engine/Utils/Enums';

require('dotenv').config();

new Server(
  [container.get<RedisRouter>(types.RedisRouter)],
  [new AuthMiddleware(MiddlewareOrder.Begin)],
).start();
