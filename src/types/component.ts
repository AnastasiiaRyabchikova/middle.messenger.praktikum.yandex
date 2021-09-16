import EventBus from '~/src/Ryabact/event-bus';

export type ComponentsType = {
  [key: string]: ClassDecorator,
} | undefined;
export interface ComponentType {
  name: string,
  template: string,
  components?: ComponentsType,
};

export type eventsType = {
  [key: string]: (e: Event) => void,
};

export type PropsType = {
  class?: string,
  events?: eventsType,
  [key: string]: unknown,
};

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
  components?: ComponentsType,
  containerTemplate: string,
};

export type compiledComponentType = HTMLElement | SVGElement;

export interface interfaceRyabactComponent {
  _name: string;
  _element: compiledComponentType;
  _template: string;
  _components: ComponentsType;
  _containerTemplate: string;
  props: PropsType;
  eventBus: () => EventBus;
};
