import { Container } from 'inversify';
import { types } from '../Types';
import IRedisRouter from '../../Routes/Abstractions/IRedis';
import RedisRouter from '../../Routes/Redis';
import ITokenRouter from '../../Routes/Abstractions/IToken';
import TokenRouter from '../../Routes/Token';
import RabbitMQRouter from '../../Routes/RabbitMQ';
import IRabbitMQRouter from '../../Routes/Abstractions/IRabbitMQ';

const bind = (container: Container) => {
  container.bind<IRedisRouter>(types.RedisRouter).to(RedisRouter);
  container.bind<ITokenRouter>(types.TokenRouter).to(TokenRouter);
  container.bind<IRabbitMQRouter>(types.RabbitMQRouter).to(RabbitMQRouter);
};

export { bind };
