import HTTPTransport from '../../modules/HTTPTransport';

export default class BaseApi {
  http: HTTPTransport;

  constructor(http: HTTPTransport) {
    this.http = http;
  }
};
