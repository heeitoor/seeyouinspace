import { controllers } from './Types/Controllers';
import { integrations } from './Types/Integrations';
import { routers } from './Types/Routers';
import { datas } from './Types/Datas';

const types = {
  ...routers,
  ...controllers,
  ...integrations,
  ...datas,
};

export { types };
