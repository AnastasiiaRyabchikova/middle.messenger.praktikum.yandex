import isObject from './isObject.js';

const get = (object, path) => {
  const keys = path.split('.');
  let value = object;
  for (key of keys) {
    if (!isObject(value)) {
      return;
    }
    value = value[key];
  }
  return value
};

const obj = {
  lorem: {
    foo: {
      bar: 1
    },
  },
};

const string = 'lore.f.bar';

console.log(get(obj, string));
