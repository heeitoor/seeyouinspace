import IRabbitMQController from './Abstractions/IRabbitMQ';
import { Request } from 'express';
import IResult from '../Engine/IResult';
import { injectable, inject } from 'inversify';
import { types } from '../IoC/Types';
import RabbitMQIntegration from '../Integrations/RabbitMQ';

@injectable()
export default class RabbitMQController implements IRabbitMQController {
  constructor(
    @inject(types.RabbitMQIntegration) private integration: RabbitMQIntegration,
  ) {}

  get(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
      return this.integration.consume();
  }

  post(request: Request): Promise<IResult> {
    this.integration.publish(request.body);

    return new Promise<IResult>((resolve, reject) => {
      resolve({ ok: true, data: 'yay' });
    });
  }

  put(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
    throw new Error('Method not implemented.');
  }

  patch(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
    throw new Error('Method not implemented.');
  }

  delete(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
    throw new Error('Method not implemented.');
  }
}
