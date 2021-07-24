import { Component, Components, compiledComponent } from '~/src/types/component';
import {
  isClosedTag,
  isSelfClosingTag,
  isTag,
  isSvgTag,
} from './utils/tag';
import isObject from './utils/isObject';
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
    return '';
  }

  return result[1];
};

type parseElementProps = {
  ctx: object,
  components: Components,
  name: string,
};

const parseElement = (string: string, {
  ctx,
  components,
  name,
}: parseElementProps): compiledComponent => {
  const attributes: Array<string> = string
    .replace(/(<|\/{0,1}>)/g, '')
    .split(/(?=\s[a-zA-Z\-]*\=".*?")/)
    .map((item) => item.trim().replace(/['|"]/g, ''))
    .filter((item) => item);

  const tag: string | undefined = attributes.shift();

  if (!tag) {
    return null;
  }

  let element: compiledComponent = null;

  if (isComponent(tag) && isObject(components)) {
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

    attributes.forEach((item: string) => {
      const [key, value] = item.split('=');
      if (!element) {
        return null;
      }
      if (isVariable(value)) {
        element.setAttribute(key, get(ctx, getVariable(value)) || '');
      } else {
        element.setAttribute(key, value);
      }
    });
  }
  return element;
};
export default class Templator {

  public name: string;
  public template: string;
  public components?: Components;


  constructor (settings: Component) {
    this.template = settings.template;
    this.components = settings.components || {};
    this.name = settings.name || 'nameless component';
  }

  compile(ctx: object): compiledComponent {
    return this.compileTemplate(ctx);
  }

  compileTemplate = (ctx: object): compiledComponent => {
    let result: compiledComponent = null;
    let current: compiledComponent | Node = null;
    const { components, name, template } = this;

    const elements: string[] = template
      .replace(/\s+/g, ' ')
      .replace(/<t-if={{(.*?)}}>([\s\S]*?)<\/t-if>/g, (match: string): string => {
        const values: object = match.split(/(?=\<t-(?:if|else|else-if))/)
          .reduce((acc: object, cur: string) => {
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
      .replace(/<t-for={{(.*?)}}>([\s\S]*?)<\/t-for>/, (_, p1: string, p2: string) => {
        const [item, key] = p1.split(' of ');
        const values = get(ctx, key) || [];
        const result: string = values
          .map((_: unknown, index: number) => {
            return p2.replace(new RegExp('{{' + item + '\.(.*?)}}', 'g'), (_, p12: string) => {
              return `{{${key}[${index}].${p12}}}`
            })
          })
          .join('');
        return result;
      })
      .split(/(?<=>)|(?=<)/g)
      .map((item) => item.trim())
      .filter((item) => item);

    elements.forEach((item: string): void => {
      if (isTag(item)) {
        if (!isClosedTag(item)) {
          const element: compiledComponent = parseElement(item, { ctx, components, name });

          if (result && current && element) {
            current.appendChild(element);
          } else {
            result = element;
          }

          if (!isSelfClosingTag(item)) {
            current = element;
          }

        } else {
          if (current) {
            current = current.parentNode;
          }
        }

      } else {
        const strings: string[] = item
          .split(/(?=\{{2})|(?<=\}{2})/g)

        strings.forEach((string) => {
          const text = isVariable(string)
            ? get(ctx, getVariable(string)) || ''
            : string;
          if (current) {
            current.appendChild(document.createTextNode(text));
          }
        });
      }
    })
  
    return result;
  };
};

export { default as render } from './render';
