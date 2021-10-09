import { Component } from 'ryabact';

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

export type ComponentsType = {
  [key: string]: Component,
};

export interface ComponentSettingsInterface {
  props: PropsType,
  name: string,
  template: string,
  components?: { [key: string]: Component },
  containerTemplate: string,
};
