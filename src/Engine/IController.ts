import { Request } from 'express';

export default interface IController {
  get(request: Request);
  post(request: Request);
  put(request: Request);
  patch(request: Request);
  delete(request: Request);
}
