import 'reflect-metadata';
import { container } from './IoC/Container';
import RedisRouter from './Routes/Redis';
import { types } from './IoC/Types';
import Server from './Server';
import AuthMiddleware from './Middlewares/Auth';
import { MiddlewareOrder } from './Engine/Utils/Enums';
import TokenRouter from './Routes/Token';

new Server(
  [
    container.get<RedisRouter>(types.RedisRouter),
    container.get<TokenRouter>(types.TokenRouter),
  ],
  [new AuthMiddleware(MiddlewareOrder.Begin)],
).start(process.env.PORT);
