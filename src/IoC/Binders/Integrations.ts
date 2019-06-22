import { Container } from 'inversify';
import { types } from '../Types';
import RedisIntegration from '../../Integrations/Redis';
import IRedisIntegration from '../../Integrations/Abstractions/IRedis';

const bind = (container: Container) => {
  container.bind<IRedisIntegration>(types.RedisIntegration).to(RedisIntegration);
};

export { bind };
