import { Container } from 'inversify';
import { types } from '../Types';
import IRedisRouter from '../../Routes/Abstractions/IRedis';
import RedisRouter from '../../Routes/Redis';

const bind = (container: Container) => {
  container.bind<IRedisRouter>(types.RedisRouter).to(RedisRouter);
};

export { bind };
