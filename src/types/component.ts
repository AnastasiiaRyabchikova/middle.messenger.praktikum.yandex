export interface Component {
  name: string,
  template: string,
  components?: Components
};

export type Props = {
  class?: string,
  [key: string]: unknown,
};

export type Components = {
  [key: string]: Function,
};

export type compiledComponent = HTMLElement | SVGElement | null;
