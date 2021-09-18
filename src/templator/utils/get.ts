import isArray from './is-array';
import isObject from './is-object';

export default (
  object: Record<string, unknown>,
  path: string,
): any => {
  const keys: Array<string> = path
    .split(/[.[\]]/)
    .map((item: string) => item.trim())
    .filter(Boolean);
  let value: any = object;
  keys.forEach((element: string) => {
    if (isObject(value)) {
      value = value[element];
    } else if (isArray(value)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value = value[Number(element)];
    }
  });
  return value;
};
