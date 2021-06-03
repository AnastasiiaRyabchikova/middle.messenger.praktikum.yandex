const isTag = (string) => {
  const regExp = /^<(.*?)>$/;
  return regExp.test(string);
};

const isClosedTag = (tag) => {
  return tag && tag[1] === '/';
};

const compileTemplate = (template, ctx) => {
  const elements = template
    .replace(/\s+/g, ' ')
    .split(/(?<=>)|(?=<)/g)
    .map((item) => item.trim())
    .filter((item) => item);

  console.log(elements);

  elements.forEach((item) => {
    console.log(item, isTag(item));
    console.log(item, isClosedTag(item));
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
