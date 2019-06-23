import { Container } from 'inversify';
import { types } from '../Types';
import IRedisRouter from '../../Routes/Abstractions/IRedis';
import RedisRouter from '../../Routes/Redis';
import ITokenRouter from '../../Routes/Abstractions/IToken';
import TokenRouter from '../../Routes/Token';

const bind = (container: Container) => {
  container.bind<IRedisRouter>(types.RedisRouter).to(RedisRouter);
  container.bind<ITokenRouter>(types.TokenRouter).to(TokenRouter);
};

export { bind };
