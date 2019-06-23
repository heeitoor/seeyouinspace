import IServiceRequestHandler from '../Engine/IServiceRequestHandler';
import { Request, Response, NextFunction } from 'express';
import { MiddlewareOrder } from '../Engine/Utils/Enums';
import jwt from 'jsonwebtoken';
import { AuthorizationError } from '../Errors/Token';

export default class AuthMiddleware implements IServiceRequestHandler {
  order: MiddlewareOrder;

  constructor(order: MiddlewareOrder) {
    this.order = order;
  }

  handler(req: Request, res: Response, next: NextFunction): void {
    const { authorization } = req.headers;
    const { path } = req;

    if (!path.startsWith('/token')) {
      try {
        jwt.verify(authorization, process.env.JWT_SECRET);
      } catch {
        throw new AuthorizationError();
      }
    }

    next();
  }
}
