import HTTPTransport from 'http-transport';

export default class BaseApi {
  http: HTTPTransport;

  constructor(http: HTTPTransport) {
    this.http = http;
  }
};
