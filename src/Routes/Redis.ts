import { Router } from 'express';
import RedisController from '../Controllers/Redis';
import { inject, injectable } from 'inversify';
import { types } from '../IoC/Types';
import IRedisRouter from './Abstractions/IRedis';

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
      .get('/:key', async (req, res, next) => {
        res.send(await this.controller.get(req));
        next();
      })
      .post('/', async (req, res, next) => {
        res.send(await this.controller.post(req));
        next();
      });

    return router;
  }
}
