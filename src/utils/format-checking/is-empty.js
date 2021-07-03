import isObject from 'isobject';
import { isArray } from '../format-checking';

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
