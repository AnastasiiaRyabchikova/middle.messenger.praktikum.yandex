import isObject from './is-object';
import isArray from './is-array';

export default (value) => {
  if (!value) {
    return true;
  }

  if (isArray(value)) {
    return !value.length;
  }

  if (isObject(value)) {
    return !Object.keys(value);
  }

  return true;
};
