import { Router } from 'express';
import { inject, injectable } from 'inversify';
import RedisController from '../Controllers/Redis';
import { types } from '../IoC/Types';
import IRedisRouter from './Abstractions/IRedis';
import RedisSchema from './Schemas/Redis';

@injectable()
export default class RedisRouter implements IRedisRouter {
  path: string = '/redis';

  constructor(
    @inject(types.RedisController) private controller: RedisController,
  ) {}

  register(): Router {
    const router = Router();

    //adicionar funcionalidade de custom middleware por rota
    // router.use((req, res, next) => {
    //   console.log('router redis');
    //   next();
    // });

    router
      .get('/:key', RedisSchema.get, async (req, res, next) => {
        res.send(await this.controller.get(req));
        next();
      })
      .post('/', RedisSchema.post, async (req, res, next) => {
        res.send(await this.controller.post(req));
        next();
      });

    return router;
  }
}
