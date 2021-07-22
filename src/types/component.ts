export type Component = {
  name: string,
  template: string,
  components?: {
    [key: string]: Component,
  }
};
