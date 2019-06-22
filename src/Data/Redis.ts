import redis, { RedisClient } from 'redis';
import IResult from '../Engine/IResult';
import { injectable } from 'inversify';

@injectable()
export default class RedisData {
  private client: RedisClient;

  constructor() {
    console.log('cria instancia');
    this.client = redis.createClient(process.env.REDIS_URL);
    this.client.select(1);
  }

  static get instance() {
    console.log('get instancia');
    return new RedisData();
  }

  async get(key: string) {
    return new Promise<IResult>((resolve, reject) => {
      this.client.get(key, (error, result) => {
        if (error) {
          reject({
            ok: false,
            data: error,
          });
        } else {
          resolve({
            ok: true,
            data: result,
          });
        }
      });
    });
  }

  async set(key: string, value: string) {
    return new Promise<IResult>((resolve, reject) => {
      this.client.set(key, value, (error, result) => {
        console.log(error);
        console.log(result);
        if (error) {
          reject({
            ok: false,
            data: error,
          });
        } else {
          resolve({
            ok: true,
            data: result,
          });
        }
      });
    });
  }
}
