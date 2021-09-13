import isObject from './isObject';

export default (object: Record<string, unknown>, path: string): any => {
  const keys: Array<string> = path
    .split(/[.\[\]]/)
    .map((item: string) => item.trim())
    .filter(Boolean);
  let value: any = object;
  keys.forEach((element: string) => {
    if (isObject(value)) {
      value = value[element];
    }
  });
  return value;
};
