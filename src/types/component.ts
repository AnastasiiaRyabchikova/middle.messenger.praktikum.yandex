export interface ComponentType {
  name: string,
  template: string,
  components?: ComponentsType,
};

export type eventsType = {
  [key: string]: EventHandlerNonNull,
} | undefined;

export type PropsType = {
  class?: string,
  events?: eventsType,
  [key: string]: unknown,
};

export type ComponentsType = {
  [key: string]: ClassDecorator,
} | undefined;

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
  components?: ComponentsType,
  containerTemplate: string,
};

export type compiledComponentType = HTMLElement | SVGElement | null;
