import IRabbitMQRouter from './Abstractions/IRabbitMQ';
import { Router, Request, Response } from 'express';
import RabbitMQSchema from './Schemas/RabbitMQ';
import { inject, injectable } from 'inversify';
import { types } from '../IoC/Types';
import RabbitMQController from '../Controllers/RabbitMQ';

@injectable()
export default class RabbitMQRouter implements IRabbitMQRouter {
  path: string = '/rabbitmq';

  constructor(
    @inject(types.RabbitMQController) private controller: RabbitMQController,
  ) {}

  register(): Router {
    const router = Router();

    router
      .post('/', RabbitMQSchema.post, async (req: Request, res: Response) => {
        res.send(await this.controller.post(req));
      })
      .get('/', async (req: Request, res: Response) => {});

    return router;
  }
}
