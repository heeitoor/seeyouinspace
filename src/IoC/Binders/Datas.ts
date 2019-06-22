import { Container } from 'inversify';
import { types } from '../Types';
import RedisData from '../../Data/Redis';
import IRedisData from '../../Data/Abstractions/IRedis';

const bind = (container: Container) => {
  container.bind<IRedisData>(types.RedisData).to(RedisData);
};

export { bind };
