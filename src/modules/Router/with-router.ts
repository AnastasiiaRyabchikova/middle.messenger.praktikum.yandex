import { ComponentConstructable } from '@/types/component';
import Router from './Router';

export default function withRouter(Block: ComponentConstructable): ComponentConstructable {
  return class WithRouter extends Block {
    router: Router;

    constructor(props: any) {
      super(props);
      this.router = new Router();
    }
  };
};
