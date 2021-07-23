import {
  isArray,
  isObject,
  isEmpty,
} from '../format-checking';

const stringFromObject = (value: object): string => (
  Object.keys(value)
    .map((key) => (
      value[key] ? key : ''
    ))
    .join(' ')
);

export default (value: unknown) => {
  if (isEmpty(value)) {
    return '';
  }

  if (isObject(value)) {
    return stringFromObject(value);
  }

  if (isArray(value)) {
    return value
      .reduce((acc: object, cur: object | string | null) => {
        const rezult = isObject(cur) ? stringFromObject(cur) : cur || '';
        return `${acc} ${rezult}`;
      }, '');
  }

  return false;
};
