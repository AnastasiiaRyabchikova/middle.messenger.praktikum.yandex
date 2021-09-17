import EventBus from '~/src/Ryabact/event-bus';

// export type typeEventHandler = () => void;

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

export type compiledComponentType = HTMLElement | SVGElement | ChildNode;

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

export type ComponentsType = {
  [key: string]: interfaceRyabactComponent,
} | undefined;

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
  components?: ComponentsType,
  containerTemplate: string,
};

export interface ComponentType {
  name: string,
  template: string,
  components?: ComponentsType,
};
