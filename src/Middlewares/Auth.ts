import IServiceRequestHandler from '../Engine/IServiceRequestHandler';
import { Request, Response, NextFunction, RequestHandler } from 'express';
import { MiddlewareOrder } from '../Engine/Utils/Enums';

export default class AuthMiddleware implements IServiceRequestHandler {
  order: MiddlewareOrder;

  constructor(order: MiddlewareOrder) {
    this.order = order;
  }

  handler(req: Request, res: Response, next: NextFunction): void {
    console.log('Auth middleware...');
    next();
  }
}
