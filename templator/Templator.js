import get from './utils/get';

const isTag = (string) => {
  const regExp = /^<(.*?)>$/;
  return regExp.test(string);
};

const isEval = (string) => {
  const regExp = /^{{(.*?)}}$/;
  return regExp.test(string);
};

const getValue = (ctx, string) => {
  const regExp = /^{{(.*?)}}$/;
  const result = string.match(regExp);

  if (!result) {
    return;
  }

  const expression = result[1].match(/a-zA-Z/);



  return expression;
};



const isClosedTag = (tag) => {
  return tag && tag[1] === '/';
};

const parseElement = (ctx, string) => {
  const attributes = string
    .replace(/(<|>)/g, '')
    .split(' ')
    .map((item) => item.trim())
    .filter((item) => item);

  const tag = attributes.shift();
  const element = document.createElement(tag);

  attributes.forEach((item) => {
    const [key, value] = item.split('=');
    if (isEval(value)) {
      element[key] = getValue(ctx, value) || '';
    } else {
      element[key] = value || true;
    }
  });

  return element;
};

const compileTemplate = (template, ctx) => {
  let result = null;
  let current = null;

  const elements = template
    .replace(/\s+/g, ' ')
    .split(/(?<=>)|(?=<)/g)
    .map((item) => item.trim())
    .filter((item) => item);

  elements.forEach((item) => {
    if (isTag(item)) {
      if (!isClosedTag(item)) {
        if (!result) {
          result = parseElement(ctx, item);
          current = result;
        } else {
          const element = parseElement(ctx, item);
          current.append(element);
          current = element;
        }
      } else {
        current = current.parentNode;
      }
    } else {
      const text = isEval(item)
        ? getValue(ctx, item)
        : item;
      current.append(document.createTextNode(text));
    }
  })

  return result;
};

export default class Templator {
  constructor (template) {
    this._template = template;
  }

  compile(ctx) {
    return compileTemplate(this._template, ctx);
  }
};
