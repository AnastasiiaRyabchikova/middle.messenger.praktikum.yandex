import { Methods } from './enums';
import { isArray, isObject } from '@/utils/format-checking';

interface Options {
  method?: Methods;
  headers?: Record<string, string>;
  data?: Record<string, any> | FormData;
};

interface OptionsHTTPTransport extends Options {
  timeout?: number;
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

const isFormData = (value: unknown): value is FormData => (
  Boolean(value)
  // eslint-disable-next-line
  && (value as object).toString() === '[object FormData]'
);

export default class HTTPTransport {
  private baseUrl: string

  static apiUrl = 'https://ya-praktikum.tech/api/v2';

  constructor(baseUrl: string) {
    this.baseUrl = `${HTTPTransport.apiUrl}${baseUrl}`;
  }

  get = (
    url: string,
    {
      timeout = 500,
      ...options
    }: OptionsHTTPTransport = { timeout: 500 },
  ): Promise<any> => (
    this.request(
      url,
      { ...options, method: Methods.Get },
      timeout,
    )
  );

  post = (
    url: string,
    {
      timeout = 500,
      ...options
    }: OptionsHTTPTransport = { timeout: 500 },
  ): Promise<any> => (
    this.request(
      url,
      { ...options, method: Methods.Post },
      timeout,
    )
  );

  delete = (
    url: string,
    {
      timeout = 500,
      ...options
    }: OptionsHTTPTransport = { timeout: 500 },
  ): Promise<any> => (
    this.request(
      url,
      { ...options, method: Methods.Delete },
      timeout,
    )
  );

  put = (
    url: string,
    {
      timeout = 500,
      ...options
    }: OptionsHTTPTransport = { timeout: 500 },
  ): Promise<any> => (
    this.request(
      url,
      { ...options, method: Methods.Put },
      timeout,
    )
  );

  request = (
    url: string,
    options: Options,
    timeout: number = 5000,
  ): Promise<any> => {
    const {
      method = Methods.Get,
      headers = {},
      data = {},
    } = options;

    const isFormDataParam = isFormData(data);

    return new Promise((resolve, reject) => {
      const requestUrl = method === Methods.Get && !isFormDataParam
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

      if (!isFormDataParam) {
        xhr.setRequestHeader('Content-Type', 'application/json');
      }

      const query = isFormDataParam ? data : JSON.stringify(data);

      if (method === Methods.Get) {
        xhr.send();
      } else {
        xhr.send(query as any);
      }
    });
  };
};
