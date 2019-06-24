import SchemaBase from '../../Engine/Utils/SchemaBase';
import { NextFunction, Response, Request } from 'express';
import joi from '@hapi/joi';

export default abstract class RabbitMQSchema extends SchemaBase {
  static async post(request: Request, response: Response, next: NextFunction) {
    const schema = joi.object().keys({
      data: joi
        .alternatives(joi.string().min(3), joi.object().min(1))
        .required(),
    });

    super.validate(schema, request.body, response, next);
  }
}
