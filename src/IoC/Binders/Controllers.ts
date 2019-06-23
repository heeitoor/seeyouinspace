import { Container } from 'inversify';
import { types } from '../Types';
import RedisController from '../../Controllers/Redis';
import IRedisController from '../../Controllers/Abstractions/IRedis';
import ITokenController from '../../Controllers/Abstractions/IToken';
import TokenController from '../../Controllers/Token';

const bind = (container: Container) => {
  container.bind<IRedisController>(types.RedisController).to(RedisController);
  container.bind<ITokenController>(types.TokenController).to(TokenController);
};

export { bind };
