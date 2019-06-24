import { NextFunction, Response, Request } from 'express';
import ErrorBase from '../Engine/Utils/ErrorBase';

export default abstract class ErrorMiddleware {
  static handler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ): void {
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
  }
}
