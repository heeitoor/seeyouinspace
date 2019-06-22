import IServiceRouter from './IServiceRouter';

export default abstract class ServiceRouterBase implements IServiceRouter {
  abstract path: string;

  abstract register(): import('express').Router;
}
