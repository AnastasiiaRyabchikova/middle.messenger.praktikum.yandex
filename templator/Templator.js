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

const compileTemplate = (template, ctx) => {
  const result = null;

  const elements = template
    .replace(/\s+/g, ' ')
    .split(/(?<=>)|(?=<)/g)
    .map((item) => item.trim())
    .filter((item) => item);

  elements.forEach((item) => {
    if (isTag(item) ) {
      if (!isClosedTag(item)) {
        if (!result) {

          const attributes = item
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

          console.log(element);
        }
      }
    }
  })
};

export default class Templator {
  constructor (template) {
    this._template = template;
  }

  compile(ctx) {
    return compileTemplate(this._template, ctx);
  }
};
