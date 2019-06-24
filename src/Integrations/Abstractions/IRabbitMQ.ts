export default interface IRabbitMQIntegration {
  publish(data: any);
  consume();
}
