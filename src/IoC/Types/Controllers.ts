const controllers = {
  RedisController: Symbol.for('IRedisController'),
  TokenController: Symbol.for('ITokenController'),
  RabbitMQController: Symbol.for('IRabbitMQController'),
};

export { controllers };
