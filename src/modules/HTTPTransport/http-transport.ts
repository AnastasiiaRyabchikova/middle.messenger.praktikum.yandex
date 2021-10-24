import { Methods } from './enums';
import { isArray, isObject } from '../../utils/format-checking';

interface Options {
  method?: Methods,
  headers?: Record<string, string>,
  data?: Record<string, unknown>,
};

interface OptionsHTTPTransport extends Options {
  timeout: number,
};

const queryStringify = (data: Record<string, unknown>): string => (
  Object.keys(data)
    .reduce((acc: string, cur: string, index) => {
      let value: unknown = null;
      const curData: unknown = data[cur];
      if (isArray(curData)) {
        value = curData.join();
      } else if (isObject(curData)) {
        value = curData.toString();
      } else {
        value = curData;
      }
      return `${acc}${index > 0 ? '&' : ''}${cur}=${String(value)}`;
    }, '?')
);

export default class HTTPTransport {
  private baseUrl: string

  static apiUrl = 'https://ya-praktikum.tech/api/v2';

  constructor(baseUrl: string) {
    this.baseUrl = `${HTTPTransport.apiUrl}${baseUrl}`;
  }

  get = (
    url: string,
    options: OptionsHTTPTransport = { timeout: 500 },
  ): Promise<unknown> => (
    this.request(
      url,
      { ...options, method: Methods.Get },
      options.timeout,
    )
  );

  post = (url: string, options = { timeout: 500 }): Promise<unknown> => (
    this.request(
      url,
      { ...options, method: Methods.Post },
      options.timeout,
    )
  );

  delete = (url: string, options = { timeout: 500 }): Promise<unknown> => (
    this.request(
      url,
      { ...options, method: Methods.Delete },
      options.timeout,
    )
  );

  put = (url: string, options = { timeout: 500 }): Promise<unknown> => (
    this.request(
      url,
      { ...options, method: Methods.Put },
      options.timeout,
    )
  );

  request = (
    url: string,
    options: Options,
    timeout: number = 5000,
  ): Promise<unknown> => {
    const {
      method = Methods.Get,
      headers = {},
      data = {},
    } = options;

    const isFile = Boolean(data.entries);

    return new Promise((resolve, reject) => {
      const requestUrl = method === Methods.Get
        ? `${this.baseUrl}${url}${queryStringify(data)}`
        : `${this.baseUrl}${url}`;

      const xhr = new XMLHttpRequest();
      xhr.timeout = timeout;

      xhr.withCredentials = true;

      Object.keys(headers)
        .forEach((item: string) => {
          xhr.setRequestHeader(item, headers[item]);
        });

      xhr.open(method, requestUrl);

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.ontimeout = reject;
      xhr.onabort = reject;
      xhr.onerror = (err) => {
        reject(err);
      };

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status < 400) {
            resolve(xhr.response);
          } else {
            reject(xhr.response);
          }
        }
      };

      if (!isFile) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      const query = isFile ? data : JSON.stringify(data);

      if (method === Methods.Get) {
        xhr.send();
      } else {
        xhr.send(query as any);
      }
    });
  };
};
