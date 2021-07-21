import {
  isClosedTag,
  isSelfClosingTag,
  isTag,
  isSvgTag,
} from './utils/tag';
import get from './utils/get';

const isVariable = (string: string): boolean => {
  const regExp = /^{{(.*?)}}$/;
  return regExp.test(string);
};

const isComponent = (string: string): boolean => (
  string[0].toLowerCase() !== string[0]
);

const getVariable = (string: string): string => {
  const regExp = /^{{(.*?)}}$/;
  const result: Array<string> | null = string.match(regExp);

  if (!result) {
    return;
  }

  return result[1];
};

const parseElement = (string: string, {
  ctx,
  components,
  name,
}): object => {
  const attributes: Array<string> = string
    .replace(/(<|\/{0,1}>)/g, '')
    .split(/(?=\s[a-zA-Z\-]*\=".*?")/)
    .map((item) => item.trim().replace(/['|"]/g, ''))
    .filter((item) => item);

  const tag: string = attributes.shift();

  let element = null;

  if (isComponent(tag)) {
    const component = components[tag];
    
    if (!component) {
      throw new Error(`Found an unregistered component ${tag} in ${name}`);
    }
    
    const componentCtx: object = attributes.reduce((acc: object, cur: string): object => {
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
    element = isSvgTag(tag)
      ? document.createElementNS('http://www.w3.org/2000/svg', tag)
      : document.createElement(tag);

    attributes.forEach((item) => {
      const [key, value] = item.split('=');
      if (isVariable(value)) {
        element.setAttribute(key, get(ctx, getVariable(value)) || '');
      } else {
        element.setAttribute(key, value || true);
      }
    });
  }
  return element;
};
export default class Templator {

  public name: string;
  public template: string;
  public components: object;


  constructor ({
    name,
    template,
    components,
  }) {
    this.template = template;
    this.components = components || {};
    this.name = name || 'nameless component';
  }

  compile(ctx: object): object {
    return this.compileTemplate(ctx);
  }

  compileTemplate = (ctx) => {
    let result = null;
    let current = null;
    const { components, name, template } = this;

    const elements: string[] = template
      .replace(/\s+/g, ' ')
      .replace(/<t-if={{(.*?)}}>([\s\S]*?)<\/t-if>/g, (match: string): string => {
        const values: object = match.split(/(?=\<t-(?:if|else|else-if))/)
          .reduce((acc, cur) => {
            let key = null;
            let value = null;

            if (/(?=\<t-(?:if|else-if))/.test(cur)) {
              [, key, value] = cur.match(/<t-(?:if|else-if)={{(.*?)}}>([\s\S]*)/);
            } else if (/(?=\<t-else)/.test(cur)) {
              key = '$default';
              const temp = cur.match(/<t-else>([\s\S]*)/);
              value = temp && temp[1];
            };
            value = value.replace('</t-if>', '')
            return {
              ...acc,
              [key]: value,
            };

          }, {});
        
        return Object.entries(values)
          .map(([key, value]) => {
            if (key === '$default') {
              return value;
            }
            return get(ctx, key) ? value : '';
          }).filter((item) => (item))[0] || ''
      })
      .replace(/<t-for={{(.*?)}}>([\s\S]*?)<\/t-for>/, (match, p1, p2) => {
        const [item, key] = p1.split(' of ');
        const values = get(ctx, key) || [];
        const result = values
          .map((value, index) => {
            return p2.replace(new RegExp('{{' + item + '\.(.*?)}}', 'g'), (match2, p12) => {
              return `{{${key}[${index}].${p12}}}`
            })
          })
          .join('');
        return result;
      })
      .split(/(?<=>)|(?=<)/g)
      .map((item) => item.trim())
      .filter((item) => item);

    elements.forEach((item) => {
      if (isTag(item)) {
        if (!isClosedTag(item)) {
          const element: object | null = parseElement(item, { ctx, components, name });

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
        const strings: string[] = item
          .split(/(?=\{{2})|(?<=\}{2})/g)

        strings.forEach((string) => {
          const text = isVariable(string)
            ? get(ctx, getVariable(string)) || ''
            : string;
          current.append(document.createTextNode(text));
        });
      }
    })
  
    return result;
  };
};

export { default as render } from './render';
