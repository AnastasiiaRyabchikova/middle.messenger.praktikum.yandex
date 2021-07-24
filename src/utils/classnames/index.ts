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

export default (value: ClassnameObject | Array<ClassnameObject | string | undefined>): string => {
  if (isEmpty(value)) {
    return '';
  }

  if (isObject(value)) {
    return stringFromObject(value);
  }

  if (isArray(value)) {
    return value
      .reduce((acc: string, cur: ClassnameObject | string) => {
        const rezult = isObject(cur) ? stringFromObject(cur) : cur;
        return `${acc} ${rezult}`;
      }, '');
  }

  return '';
};
