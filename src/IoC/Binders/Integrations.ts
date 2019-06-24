import { Container } from 'inversify';
import { types } from '../Types';
import RedisIntegration from '../../Integrations/Redis';
import IRedisIntegration from '../../Integrations/Abstractions/IRedis';
import IRabbitMQIntegration from '../../Integrations/Abstractions/IRabbitMQ';
import RabbitMQIntegration from '../../Integrations/RabbitMQ';

const bind = (container: Container) => {
  container
    .bind<IRedisIntegration>(types.RedisIntegration)
    .to(RedisIntegration);
  container
    .bind<IRabbitMQIntegration>(types.RabbitMQIntegration)
    .to(RabbitMQIntegration);
};

export { bind };
