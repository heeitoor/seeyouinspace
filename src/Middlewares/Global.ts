import { Application } from 'express';
import bodyParser from 'body-parser';

export default abstract class GlobalMiddleware {
  static register(server: Application) {
    server.use(bodyParser.json());
  }
}
