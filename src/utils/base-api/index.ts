import HTTPTransport from '../../modules/HTTPTransport';

export default class BaseApi {
  http: HTTPTransport;

  constructor(endPoint: string) {
    this.http = new HTTPTransport(endPoint);
  }
};
