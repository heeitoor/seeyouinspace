import { Container } from 'inversify';
import { types } from '../Types';
import RedisController from '../../Controllers/Redis';
import IRedisController from '../../Controllers/Abstractions/IRedis';
import ITokenController from '../../Controllers/Abstractions/IToken';
import TokenController from '../../Controllers/Token';
import RabbitMQController from '../../Controllers/RabbitMQ';
import IRabbitMQController from '../../Controllers/Abstractions/IRabbitMQ';

const bind = (container: Container) => {
  container.bind<IRedisController>(types.RedisController).to(RedisController);
  container.bind<ITokenController>(types.TokenController).to(TokenController);
  container.bind<IRabbitMQController>(types.RabbitMQController).to(RabbitMQController);
};

export { bind };
