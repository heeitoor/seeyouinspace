import ITokenController from './Abstractions/IToken';
import IResult from '../Engine/IResult';
import { injectable } from 'inversify';
import jwt from 'jsonwebtoken';
import { config } from '../Config';
import { MasterKeyError } from '../Errors/Token';

@injectable()
export default class TokenController implements ITokenController {
  get(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
    throw new Error('Method not implemented.');
  }

  post(
    request: import('express').Request,
  ): Promise<import('../Engine/IResult').default> {
    const { masterKey } = request.body;

    if (masterKey === config.env.MASTER_KEY) {
      const token = jwt.sign({ masterKey }, config.env.JWT_SECRET, {
        expiresIn: 600,
      });

      return new Promise<IResult>((resolve, reject) => {
        resolve({
          ok: true,
          data: {
            token,
          },
        });
      });
    }

    throw new MasterKeyError();
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
