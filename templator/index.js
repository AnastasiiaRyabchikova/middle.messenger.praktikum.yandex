import {
  isClosedTag,
  isSelfClosingTag,
  isTag,
} from './utils/tag';
import get from './utils/get';

const isVariable = (string) => {
  const regExp = /^{{(.*?)}}$/;
  return regExp.test(string);
};

const isComponent = (string) => {
  return string[0].toLowerCase() !== string[0];
};

const getVariable = (string) => {
  const regExp = /^{{(.*?)}}$/;
  const result = string.match(regExp);

  if (!result) {
    return;
  }

  return result[1];
};

const parseElement = (string, {
  ctx,
  components,
  name,
}) => {
  const attributes = string
    .replace(/(<|\/{0,1}>)/g, '')
    .split(/(?=\s[a-zA-Z]*\=".*?")/)
    .map((item) => item.trim().replace(/['|"]/g, ''))
    .filter((item) => item);
  
  const tag = attributes.shift();

  let element = null;

  if (isComponent(tag)) {
    const component = components[tag];
    
    if (!component) {
      throw new Error(`Found an unregistered component ${tag} in ${name}`);
    }
    
    const componentCtx = attributes.reduce((acc, cur) => {
      const [key, value] = cur.split('=');
      const prop = isVariable(value)
        ? get(ctx, getVariable(value)) || ''
        : value || true;

      return {
        ...acc,
        [key]: prop,
      }
    }, {});
    element = component(componentCtx);


  } else {
    element = document.createElement(tag);

    attributes.forEach((item) => {
      const [key, value] = item.split('=');
      if (isVariable(value)) {
        element[key] = get(ctx, getVariable(value))|| '';
      } else {
        element[key] = value || true;
      }
    });
  }
  return element;
};
export default class Templator {

  constructor ({
    name,
    template,
    components,
  }) {
    this.template = template;
    this.components = components || {};
    this.name = name || 'nameless component';
  }

  compile(ctx) {
    return this.compileTemplate(ctx);
  }

  compileTemplate = (ctx) => {
    let result = null;
    let current = null;
    const { components, name, template } = this;
  
    const elements = template
      .replace(/\s+/g, ' ')
      .split(/(?<=>)|(?=<)/g)
      .map((item) => item.trim())
      .filter((item) => item);
    
    elements.forEach((item) => {
      if (isTag(item)) {
        if (!isClosedTag(item)) {
          const element = parseElement(item, { ctx, components, name });

          if (result) {
            current.append(element);
          } else {
            result = element;
          }

          if (!isSelfClosingTag(item)) {
            current = element;
          }

        } else {
          current = current.parentNode;
        }

      } else {
        const strings = item
          .split(/(?=\{{2})|(?<=\}{2})/g)

        strings.forEach((string) => {
          const text = isVariable(string)
            ? get(ctx, getVariable(string))
            : string;
          current.append(document.createTextNode(text));
        });
      }
    })
  
    return result;
  };
};
