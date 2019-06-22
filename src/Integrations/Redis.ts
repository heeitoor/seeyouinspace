import RedisData from '../Data/Redis';
import IResult from '../Engine/IResult';
import IRedisIntegration from './Abstractions/IRedis';
import { inject, injectable } from 'inversify';
import { types } from '../IoC/Types';

@injectable()
export default class RedisIntegration implements IRedisIntegration {
  // private _redisData: RedisData;

  // private get redisData(): RedisData {
  //   //if (!this._redisData) {
  //   this._redisData = RedisData.instance;
  //   //}
  //   return this._redisData;
  // }

  constructor(@inject(types.RedisData) private redis: RedisData) {}

  async set(key: string, value: string) {
    return await this.redis.set(key, value);
  }

  async get(key: string): Promise<IResult> {
    return await this.redis.get(key);
  }
}
