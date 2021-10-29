import HTTPTransport from 'http-transport';

export default class BaseApi {
  http: HTTPTransport;

  constructor(endPoint: string) {
    this.http = new HTTPTransport(endPoint);
  }
};
