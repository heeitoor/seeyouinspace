import joi from '@hapi/joi';
import { NextFunction, Response, Request } from 'express';
import SchemaBase from '../../Engine/Utils/SchemaBase';

export default abstract class RedisSchema extends SchemaBase {
  private static baseObj = {
    key: joi
      .string()
      .min(3)
      .disallow('')
      .required(),
  };

  static async get(request: Request, response: Response, next: NextFunction) {
    const schema = joi.object().keys(RedisSchema.baseObj);

    super.validate(schema, request.params, response, next);
  }

  static async post(request: Request, response: Response, next: NextFunction) {
    const schema = joi.object().keys({
      ...RedisSchema.baseObj,
      value: joi
        .string()
        .min(3)
        .disallow('')
        .required(),
    });

    super.validate(schema, request.body, response, next);
  }
}
