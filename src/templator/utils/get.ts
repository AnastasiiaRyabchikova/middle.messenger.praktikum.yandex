import isObject from './isObject';

export default (object: object, path: string): any => {
  const keys: Array<String> = path
    .split(/[.\[\]]/)
    .map((item) => item.trim())
    .filter((item) => item);
  let value: object = object;
  keys.forEach((element: string) => {
    if (isObject(value)) {
      value = value[element];
    }
  });
  return value;
};
