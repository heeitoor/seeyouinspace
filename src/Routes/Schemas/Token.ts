import SchemaBase from '../../Engine/Utils/SchemaBase';
import joi from '@hapi/joi';
import { NextFunction } from 'connect';
import { Response, Request } from 'express-serve-static-core';

export default abstract class TokenSchema extends SchemaBase {
  static post(req: Request, res: Response, next: NextFunction) {
    const schema = joi.object().keys({
      masterKey: joi.string().required(),
    });

    super.validate(schema, req.body, res, next);
  }
}
