import { ObjectSchema } from '@hapi/joi';
import { NextFunction, Response } from 'express';

export default abstract class SchemaBase {
  static validate(
    schema: ObjectSchema,
    object: any,
    response: Response,
    next: NextFunction,
  ) {
    const { error } = schema.validate(object);

    if (error) {
      const data = {
        details: error.details.map((x) => x.message),
      };
      response.status(400).send(data);
      return;
    }

    next();
  }
}
