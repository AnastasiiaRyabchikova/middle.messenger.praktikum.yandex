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
  get = (
    url: string,
    options: OptionsHTTPTransport,
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

    return new Promise((resolve, reject) => {
      const requestUrl = method === Methods.Get
        ? `${url}${queryStringify(data)}`
        : url;

      const xhr = new XMLHttpRequest();
      xhr.timeout = timeout;

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

      if (method === Methods.Get) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
};
