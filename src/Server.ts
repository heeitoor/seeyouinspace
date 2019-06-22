import express, {
  Router,
  RequestHandler,
  Request,
  Response,
  NextFunction,
} from 'express';
import IServiceRouter from './Engine/IServiceRouter';
import IServiceRequestHandler from './Engine/IServiceRequestHandler';
import { MiddlewareOrder } from './Engine/Utils/Enums';
import bodyParser from 'body-parser';

export default class Server {
  private server: express.Application;

  constructor(
    routers: IServiceRouter[],
    middlewares: IServiceRequestHandler[],
  ) {
    this.server = express();

    this.server.use(bodyParser.json());

    this.setupMiddlewares(middlewares, true);

    routers.forEach((router) => {
      this.server.use(router.path, router.register());
    });

    this.setupMiddlewares(middlewares, false);

    this.server.use((req, res, next) => {
      console.log('oisfiosdf');

      next();
    });
  }

  start(port: number = 5000) {
    this.server.listen(port, () => {
      console.log(`service starting on http://localhost:${port}`);
    });
  }

  private setupMiddlewares(
    middlewares: IServiceRequestHandler[],
    begining: boolean = true,
  ) {
    const beginMiddlewares: IServiceRequestHandler[] = middlewares.filter(
      (x) => begining && x.order === MiddlewareOrder.Begin,
    );

    beginMiddlewares.forEach((middleware) => {
      this.server.use(middleware.handler);
    });
  }
}
