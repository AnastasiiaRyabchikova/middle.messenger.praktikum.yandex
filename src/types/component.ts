export interface ComponentType {
  name: string,
  template: string,
  components?: ComponentsType,
};

export type PropsType = {
  class?: string,
  [key: string]: unknown,
};

export type ComponentsType = {
  [key: string]: Function,
} | undefined;

export type compiledComponentType = HTMLElement | SVGElement | null;
