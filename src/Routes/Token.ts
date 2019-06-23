import express, { Router } from 'express';
import ITokenRouter from './Abstractions/IToken';
import TokenSchema from './Schemas/Token';
import { inject, injectable } from 'inversify';
import TokenController from '../Controllers/Token';
import { types } from '../IoC/Types';

@injectable()
export default class TokenRouter implements ITokenRouter {
  path: string = '/token';

  constructor(
    @inject(types.TokenController) private controller: TokenController,
  ) {}

  register(): Router {
    const router = express.Router();

    router
      .post('/', TokenSchema.post, async (req, res, next) => {
        try {
          res.send(await this.controller.post(req));
        } catch (error) {
          next(error);
          return;
        }
        next();
      })
      .delete('/', async (req, res, next) => {});

    return router;
  }
}
