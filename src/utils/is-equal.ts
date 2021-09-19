import isObject from './format-checking/is-object';

export default function isEqual(
  object1: unknown,
  object2: unknown,
): boolean {
  if (!isObject(object1) || !isObject(object2)) {
    return false;
  }

  const props1: string[] = Object.getOwnPropertyNames(object1);
  const props2: string[] = Object.getOwnPropertyNames(object2);

  if (props1.length !== props2.length) {
    return false;
  }

  for (let i: number = 0; i < props1.length; i += 1) {
    const prop: string = props1[i];

    const bothAreObjects = isObject(object1[prop]) && isObject(object2[prop]);

    if (!bothAreObjects && (object1[prop] !== object2[prop])) {
      return false;
    }

    if (bothAreObjects && !isEqual(object1[prop], object2[prop])) {
      return false;
    }
  }

  return true;
}
