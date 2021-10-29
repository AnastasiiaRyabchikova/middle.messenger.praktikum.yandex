import { Component } from '~/src/modules/Ryabact';
import { Store } from '~/src/modules/Store';
import user from './user';

export const store = new Store({
  user,
});

export function connect(
  stateToProps: (state: any) => any,
  Element: typeof Component,
): Component {
  return class WithStore extends Element {
    constructor(props: any) {
      super({ ...props, ...stateToProps(store.getState()) });
    }

    componentDidMount(props: any) {
      super.componentDidMount(props);

      store.on('changed', () => {
        this.setProps({
          ...this.props,
          ...stateToProps(store.getState()),
        });
      });
    }
  };
};
