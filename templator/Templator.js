import get from './utils/get';

const isTag = (string) => {
  const regExp = /^<(.*?)>$/;
  return regExp.test(string);
};

const isVariable = (string) => {
  const regExp = /^{{(.*?)}}$/;
  return regExp.test(string);
};

const getVariable = (string) => {
  const regExp = /^{{(.*?)}}$/;
  const result = string.match(regExp);
  return result && result[1] ;
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
    if (isVariable(value)) {
      element[key] = get(ctx, getVariable(value)) || '';
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
