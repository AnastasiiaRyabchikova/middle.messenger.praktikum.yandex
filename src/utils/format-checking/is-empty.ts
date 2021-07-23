import isObject from './is-object';
import isArray from './is-array';

export default (value: object | Array<string> | null) => {
  if (!value) {
    return true;
  }

  if (isArray(value)) {
    return !value.length;
  }

  if (isObject(value)) {
    return !Object.keys(value).length;
  }

  return true;
};
