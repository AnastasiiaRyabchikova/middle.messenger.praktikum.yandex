import {
  ComponentConstructable,
  ComponentsType,
  compiledComponentType,
  PropsType,
  eventsType,
} from '@/types/component';
import {
  isClosedTag,
  isSelfClosingTag,
  isTag,
  isSvgTag,
} from './utils/tag';
import isObject from './utils/is-object';
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
  const result: Array<string> | null = regExp.exec(string);

  if (!result) {
    return '';
  }

  return result[1];
};

const isEventHandler = (string: string): boolean => {
  const regExp = /^on[A-Z]\w/;
  return regExp.test(string);
};

type parseElementProps = {
  ctx: PropsType,
  components: ComponentsType,
  name: string,
};

const parseElement = (string: string, {
  ctx,
  components,
  name,
}: parseElementProps): compiledComponentType => {
  const attributes: Array<string> = string
    .replace(/(<|\/{0,1}>)/g, '')
    .split(/(?=\s[a-zA-Z-]*=".*?")/)
    .map((item) => item.trim().replace(/['|"]/g, ''))
    .filter((item) => item);

  if (!attributes.length) {
    throw new Error('Empty component');
  }

  const tag: string = attributes.shift() || '';

  let element: compiledComponentType = document.createElement('div');

  if (isComponent(tag) && isObject(components)) {
    const Component: ComponentConstructable = components[tag];

    if (!Component) {
      throw new Error(`Found an unregistered component ${tag} in ${name}`);
    }

    const componentCtx: PropsType = attributes
      .reduce((acc: Record<string, unknown>, cur: string): PropsType => {
        const [key, value]: string[] = cur.split('=');

        let prop: any = '';

        if (isVariable(value)) {
          const temp: unknown = get(ctx, getVariable(value));
          prop = temp;
        } else {
          prop = value;
        }

        if (isEventHandler(key)) {
          const events: eventsType = isObject(acc.events) ? acc.events : {};
          const eventKeyTemp = key.slice(2);
          const eventKey = eventKeyTemp[0].toLowerCase() + eventKeyTemp.slice(1);

          events[eventKey] = prop;
          acc.events = events;
        } else {
          acc[key] = prop;
        }

        return acc;
      }, {});
    // eslint-disable-next-line
    element = new Component(componentCtx).element;
  } else {
    element = isSvgTag(tag)
      ? document.createElementNS('http://www.w3.org/2000/svg', tag)
      : document.createElement(tag);

    attributes.forEach((item: string) => {
      const [key, value] = item.split('=');
      if (element) {
        const valueAttribute: unknown = isVariable(value)
          ? get(ctx, getVariable(value))
          : value;

        element.setAttribute(key, String(valueAttribute || ''));
      }
    });
  }
  return element;
};
export default class Templator {
  public name: string;

  public template: string;

  public components?: ComponentsType;

  constructor({ template, components, name }: {
    template: string,
    components?: ComponentsType,
    name?: string,
  }) {
    this.template = template;
    this.components = components || {};
    this.name = name || 'nameless component';
  }

  compile(ctx: PropsType = {}): compiledComponentType {
    return this.compileTemplate(ctx);
  }

  compileTemplate = (ctx: PropsType): compiledComponentType => {
    let result: compiledComponentType = document.createElement('div');
    let current: compiledComponentType | Node | null = null;
    const {
      components = {},
      name,
      template,
    } = this;

    const elements: string[] = template
      .replace(/\s+/g, ' ')
      .replace(/<t-if={{(.*?)}}>([\s\S]*?)<\/t-if>/g, (match: string): string => {
        const values: Record<string, string> = match.split(/(?=<t-(?:if|else|else-if))/)
          .reduce((acc: Record<string, string>, cur: string) => {
            let key;
            let value: string = '';

            if (/(?=<t-(?:if|else-if))/.test(cur)) {
              const array = /<t-(?:if|else-if)={{(.*?)}}>([\s\S]*)/.exec(cur);
              if (Array.isArray(array)) {
                [, key, value] = array;
              }
            } else if (/(?=<t-else)/.test(cur)) {
              key = '$default';
              const temp = /<t-else>([\s\S]*)/.exec(cur);
              value = temp ? temp[1] : '';
            };

            return {
              ...acc,
              [String(key)]: value.replace('</t-if>', ''),
            };
          }, {});

        return Object
          .entries(values)
          .map(([key, value]) => {
            if (key === '$default') {
              return value;
            }
            return get(ctx, key) ? value : '';
          })
          .filter((item) => (item))[0] || '';
      })
      .replace(/<t-for={{(.*?)}}>([\s\S]*?)<\/t-for>/, (_, p1: string, p2: string): string => {
        const [item, key] = p1.split(' of ');
        const temp: unknown = get(ctx, key);
        const values = Array.isArray(temp) ? temp : [];
        return values
          .map((_1: unknown, index: number) => (
            p2.replace(
              new RegExp(`{{${item}.(.*?)}}`, 'g'),
              (_2, p12: string) => `{{${key}[${index}].${p12}}}`,
            )
          ))
          .join('');
      })
      .split(/(?<=>)|(?=<)/g)
      .map((item) => item.trim())
      .filter((item) => item);

    elements.forEach((item: string): void => {
      if (isTag(item)) {
        if (!isClosedTag(item)) {
          const element: compiledComponentType = parseElement(item, { ctx, components, name });

          if (result && current && element) {
            current.appendChild(element);
          } else {
            result = element;
          }

          if (!isSelfClosingTag(item)) {
            current = element;
          }
        } else if (current) {
          current = current.parentNode;
        }
      } else {
        const strings: string[] = item
          .split(/(?=\{{2})|(?<=\}{2})/g);

        strings.forEach((string) => {
          let text: string;

          if (isVariable(string)) {
            text = String(get(ctx, getVariable(string)) || '');
          } else {
            text = string;
          }

          if (current) {
            current.appendChild(document.createTextNode(text));
          }
        });
      }
    });
    return result;
  };
};

export { default as render } from './render';
