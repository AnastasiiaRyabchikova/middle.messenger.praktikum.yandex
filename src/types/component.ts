import EventBus from '../modules/event-bus';

export type eventsType = {
  [key: string]: unknown,
};

export interface PropsType {
  class?: string,
  events?: eventsType,
  errors?: Record<string, string>,
  params?: Record<string, string>,
  required?: Record<string, boolean>,
  [key: string]: unknown,
};

export type compiledComponentType = HTMLElement | SVGElement;

export interface interfaceRyabactComponent {
  _name: string;
  _element: compiledComponentType;
  element: compiledComponentType;
  _template: string;
  _components: { [key: string]: interfaceRyabactComponent };
  _containerTemplate: string;
  props: PropsType;
  eventBus: () => EventBus;
};

export interface ComponentType extends interfaceRyabactComponent {
  name: string,
  template: string,
  components?: { [key: string]: ComponentType },
};

export type ComponentsType = {
  [key: string]: ComponentType,
};

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
  components?: { [key: string]: ComponentType },
  containerTemplate: string,
};
