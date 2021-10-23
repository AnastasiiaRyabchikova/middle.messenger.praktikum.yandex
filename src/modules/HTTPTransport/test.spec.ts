import * as chai from 'chai';
import * as chaiDom from 'chai-dom';
import * as chaiSpies from 'chai-spies';
import * as sinon from 'sinon';
import HTTPTransport from '.';

const { expect } = chai;

chai
  .use(chaiDom)
  .use(chaiSpies);

describe('HTTPTransport', () => {
  const requests: sinon.SinonFakeXMLHttpRequest[] = [];
  beforeEach(() => {
    // eslint-disable-next-line
    (global as any).XMLHttpRequest = sinon.useFakeXMLHttpRequest();
    const xhr: sinon.SinonFakeXMLHttpRequestStatic = sinon.useFakeXMLHttpRequest();

    xhr.onCreate = ((request: sinon.SinonFakeXMLHttpRequest): void => {
      requests.push(request);
    });
  });

  it('Использование get метода', () => {
    const api = new HTTPTransport('/');
    // eslint-disable-next-line
    api.get('/some');
    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('GET');
  });

  it('Использование post метода', () => {
    const api = new HTTPTransport('/');
    // eslint-disable-next-line
    api.post('/some');
    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('POST');
  });

  it('Использование delete метода', () => {
    const api = new HTTPTransport('/');
    // eslint-disable-next-line
    api.delete('/some');
    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('DELETE');
  });

  it('Использование put метода', () => {
    const api = new HTTPTransport('/');
    // eslint-disable-next-line
    api.put('/some');
    expect(requests.length).to.eq(1);
    expect(requests[0].method).to.eq('PUT');
  });

  afterEach(() => {
    (global as any).XMLHttpRequest.restore();
    requests.length = 0;
  });
});
