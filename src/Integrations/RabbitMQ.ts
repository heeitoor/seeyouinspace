import IRabbitMQIntegration from './Abstractions/IRabbitMQ';
import { injectable } from 'inversify';
import amqplib from 'amqplib';
import { config } from '../Config';

@injectable()
export default class RabbitMQIntegration implements IRabbitMQIntegration {
  publish(data: object | string) {
    amqplib.connect(config.env.CLOUDAMQP_URL).then((connection) => {
      connection.createChannel().then((channel) => {
        
      });
    });
  }

  consume() {
    throw new Error('Method not implemented.');
  }
}
