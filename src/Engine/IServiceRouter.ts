import { Router } from 'express';

export default interface IServiceRouter {
  path: string;
  register(): Router;
}
