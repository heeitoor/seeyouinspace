import { Container } from 'inversify';
import { types } from '../Types';
import RedisController from '../../Controllers/Redis';
import IRedisController from '../../Controllers/Abstractions/IRedis';

const bind = (container: Container) => {
  container.bind<IRedisController>(types.RedisController).to(RedisController);
};

export { bind };
