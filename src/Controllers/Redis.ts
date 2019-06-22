import { Request } from 'express';
import IResult from '../Engine/IResult';
import { injectable, inject } from 'inversify';
import IRedisController from './Abstractions/IRedis';
import { types } from '../IoC/Types';
import RedisIntegration from '../Integrations/Redis';

@injectable()
export default class RedisController implements IRedisController {
  constructor(
    @inject(types.RedisIntegration) private redisIntegration: RedisIntegration,
  ) {}

  async get(request: Request): Promise<IResult> {
    const { key } = request.params;

    return await this.redisIntegration.get(key);
  }

  async post(request: Request) {
    const { key, value } = request.body;

    return await this.redisIntegration.set(key, value);
  }

  put(request: Request) {
    throw new Error('Method not implemented.');
  }

  patch(request: Request) {
    throw new Error('Method not implemented.');
  }

  delete(request: Request) {
    throw new Error('Method not implemented.');
  }
}
