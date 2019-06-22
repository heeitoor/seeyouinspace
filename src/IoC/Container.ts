import { Container } from 'inversify';
import { bind as bindRouters } from './Binders/Routers';
import { bind as bindControllers } from './Binders/Controllers';
import { bind as bindIntegrations } from './Binders/Integrations';
import { bind as bindDatas } from './Binders/Datas';

const container = new Container();

bindRouters(container);
bindControllers(container);
bindIntegrations(container);
bindDatas(container);

export { container };
