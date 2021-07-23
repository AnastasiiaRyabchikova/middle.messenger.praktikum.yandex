export interface Component {
  name: string,
  template: string,
  components?: {
    [key: string]: object,
  }
};

export type Props = {
  [key: string]: unknown,
};
