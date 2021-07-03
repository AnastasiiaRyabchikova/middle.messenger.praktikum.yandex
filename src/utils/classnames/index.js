import {
  isArray,
  isObject,
  isEmpty,
} from '../format-checking';

const stringFromObject = (value) => (
  Object.keys(value)
    .map((key) => (
      value[key] ? key : ''
    ))
    .join(' ')
);

export default (value) => {
  if (isEmpty(value)) {
    return '';
  }

  if (isObject(value)) {
    return stringFromObject(value)
  }
  
  if (isArray(value)) {
    return value
    .reduce((acc, cur) => {
      const rezult = isObject(cur) ? stringFromObject(cur) : cur || '';
      return `${acc} ${rezult}`;
    }, '')
  }
};
