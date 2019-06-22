import { NextFunction, Response, Request, RequestHandler } from 'express';
import { MiddlewareOrder } from './Utils/Enums';

export default interface IServiceRequestHandler {
  order: MiddlewareOrder;
  handler(req: Request, res: Response, next: NextFunction): void;
}
