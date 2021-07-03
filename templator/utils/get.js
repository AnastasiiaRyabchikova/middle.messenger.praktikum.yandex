import isObject from './isObject.js';

export default (object, path) => {
  const keys = path
    .split(/[.\[\]]/)
    .map((item) => item.trim())
    .filter((item) => item);
  let value = object;
  for (key of keys) {
    
    if (!isObject(value)) {
      return;
    }

    value = value[key];
  }
  return value
};
