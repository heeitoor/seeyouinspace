import 'reflect-metadata';
import sinon from 'sinon';
import { describe } from 'mocha';
import RedisController from '../Controllers/Redis';
import IResult from '../Engine/IResult';
import { resolve } from 'url';
import RedisIntegration from '../Integrations/Redis';

class A {
  yo() {
    return 'yo;';
  }
}

describe('teste', async () => {
  it('should fake', async () => {
    const integration = new RedisIntegration(null);

    const getIntegration = sinon.stub(integration, 'get').returns(
      new Promise<IResult>((r, rr) => {
        
        r({
          ok: true,
          data: '',
        });
      }),
    );

    const b = await getIntegration(null);

    console.log('b', b)


    const put = sinon.stub(new RedisController(integration), 'get').returns(
      new Promise<IResult>((r, rr) => {
        r({
          ok: false,
          data: '',
        });
      }),
    );
    const a = await put(null);

    console.log('a', a);
  });
});
