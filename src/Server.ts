import express from 'express';
import IServiceRouter from './Engine/IServiceRouter';
import IServiceRequestHandler from './Engine/IServiceRequestHandler';
import { MiddlewareOrder } from './Engine/Utils/Enums';
import ErrorMiddleware from './Middlewares/Error';
import GlobalMiddleware from './Middlewares/Global';

export default class Server {
  private server: express.Application;

  constructor(
    routers: IServiceRouter[],
    middlewares: IServiceRequestHandler[],
  ) {
    this.server = express();

    this.setup(routers, middlewares);
  }

  start(port: string = '5000') {
    this.server.listen(port, () => {
      console.log(`service starting on http://localhost:${port}`);
    });
  }

  private setup(
    routers: IServiceRouter[],
    middlewares: IServiceRequestHandler[],
  ) {
    GlobalMiddleware.register(this.server);

    this.setupMiddlewares(middlewares);

    this.setupRouters(routers);

    this.setupMiddlewares(middlewares, false);

    this.server.use(ErrorMiddleware.handler);
  }

  private setupRouters(routers: IServiceRouter[]) {
    routers.forEach((router) => {
      this.server.use(router.path, router.register());
    });
  }

  private setupMiddlewares(
    middlewares: IServiceRequestHandler[],
    begining: boolean = true,
  ) {
    const beginMiddlewares: IServiceRequestHandler[] = middlewares.filter((x) =>
      begining
        ? x.order === MiddlewareOrder.Begin
        : x.order === MiddlewareOrder.End,
    );

    beginMiddlewares.forEach((middleware) => {
      this.server.use(middleware.handler);
    });
  }
}
