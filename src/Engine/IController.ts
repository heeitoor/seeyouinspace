import { Request } from 'express';
import IResult from './IResult';

export default interface IController {
  get(request: Request): Promise<IResult>;
  post(request: Request): Promise<IResult>;
  put(request: Request): Promise<IResult>;
  patch(request: Request): Promise<IResult>;
  delete(request: Request): Promise<IResult>;
}
