import isObject from './isObject';

export default (object, path) => {
  const keys = path
    .split(/[.\[\]]/)
    .map((item) => item.trim())
    .filter((item) => item);
  let value = object;
  keys.forEach((element) => {
    if (!isObject(value)) {
      return;
    }
    value = value[element];
  });
  return value;
};
