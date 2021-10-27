import { ComponentConstructable } from '@/types/component';
import { Store } from '@/modules/Store';
import user from './user';

export const store = new Store({
  user,
});

export function connect(
  stateToProps: (state: any) => any,
  Component: ComponentConstructable,
): ComponentConstructable {
  return class WithStore extends Component {
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
