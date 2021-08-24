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

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
};

export type compiledComponentType = HTMLElement | SVGElement | null;
