import { inject, injectable } from 'inversify';
import RedisData from '../Data/Redis';
import IResult from '../Engine/IResult';
import IRedisIntegration from './Abstractions/IRedis';
import { types } from '../IoC/Types';

@injectable()
export default class RedisIntegration implements IRedisIntegration {
  constructor(@inject(types.RedisData) private redis: RedisData) {}

  async set(key: string, value: string) {
    return await this.redis.set(key, value);
  }

  async get(key: string): Promise<IResult> {
    return await this.redis.get(key);
  }
}
