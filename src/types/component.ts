import { Component } from '~/src/modules/Ryabact';

export type eventsType = {
  [key: string]: unknown,
};

export interface PropsType {
  class?: string;
  events?: eventsType;
  errors?: Record<string, string>;
  params?: Record<string, string>;
  required?: Record<string, boolean>;
  [key: string]: unknown;
};

export interface ComponentConstructable {
  new(props?: PropsType): Component;
}

export type compiledComponentType = HTMLElement | SVGElement;

export type ComponentsType = {
  [key: string]: ComponentConstructable,
};

export interface ComponentSettingsInterface {
  props: PropsType;
  name: string;
  template: string;
  components?: ComponentsType;
  containerTemplate: string;
};
