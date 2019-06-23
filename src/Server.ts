import express from 'express';
import bodyParser from 'body-parser';
import IServiceRouter from './Engine/IServiceRouter';
import IServiceRequestHandler from './Engine/IServiceRequestHandler';
import { MiddlewareOrder } from './Engine/Utils/Enums';
import ErrorBase from './Engine/Utils/ErrorBase';
import { Response } from 'express-serve-static-core';

export default class Server {
  private server: express.Application;

  constructor(
    routers: IServiceRouter[],
    middlewares: IServiceRequestHandler[],
  ) {
    this.server = express();

    this.server.use(bodyParser.json());

    this.setupMiddlewares(middlewares);

    routers.forEach((router) => {
      this.server.use(router.path, router.register());
    });

    this.setupMiddlewares(middlewares, false);

    // middleware de erros
    this.server.use((err, req, res: Response, next) => {
      if (err instanceof ErrorBase) {
        let { code, message } = err as ErrorBase;
        code = code ? code : 400;
        res.status(code).send({
          message,
        });
      } else {
        res.status(500).send('Internal error.');
      }

      next();
    });
  }

  start(port: string = '5000') {
    this.server.listen(port, () => {
      console.log(`service starting on http://localhost:${port}`);
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
