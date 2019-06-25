import IRabbitMQIntegration from './Abstractions/IRabbitMQ';
import { injectable } from 'inversify';
import amqplib, { GetMessage } from 'amqplib';
import { config } from '../Config';
import IResult from '../Engine/IResult';

@injectable()
export default class RabbitMQIntegration implements IRabbitMQIntegration {
  publish(data: object | string) {
    amqplib.connect(config.env.CLOUDAMQP_URL).then((connection) => {
      connection.createChannel().then((channel) => {
        channel.assertQueue('queue', { durable: false });
        channel.sendToQueue('queue', Buffer.from(JSON.stringify(data)));
      });
    });
  }

  consume(): Promise<IResult> {
    return new Promise<IResult>((resolve, reject) => {
      amqplib.connect(config.env.CLOUDAMQP_URL).then((connection) => {
        connection.createChannel().then((channel) => {
          channel.assertQueue('queue', { durable: false }).then(() => {
            //channel.prefetch(1);
            channel
              .get('queue', {
                noAck: true,
              })
              .then((message: GetMessage) => {
                resolve({
                  ok: true,
                  data: JSON.parse(message.content.toString('utf8')),
                });
              });
            // channel.consume(
            //   'queue',
            //   (message) => {
            //     resolve({
            //       ok: true,
            //       data: JSON.parse(message.content.toString('utf8')),
            //     });
            //   },
            //   {
            //     noAck: true,
            //   },
            // );
          });
        });
      });
    });
  }
}
