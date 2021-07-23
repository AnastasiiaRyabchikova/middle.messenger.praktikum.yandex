import {
  isArray,
  isObject,
  isEmpty,
} from '../format-checking';

type ClassnameObject = {
  [key: string]: boolean,
};

const stringFromObject = (value: ClassnameObject): string => (
  Object.keys(value)
    .map((key: string) => (
      value[key] ? key : ''
    ))
    .join(' ')
);

export default (value: ClassnameObject | Array<ClassnameObject | string>): string => {
  if (isEmpty(value)) {
    return '';
  }

  if (isArray(value)) {
    return value
      .reduce((acc: string, cur: ClassnameObject | string) => {
        const rezult = isObject(cur) ? stringFromObject(cur) : cur;
        return `${acc} ${rezult}`;
      }, '');
  }

  if (isObject(value)) {
    return stringFromObject(value);
  }

  return '';
};
