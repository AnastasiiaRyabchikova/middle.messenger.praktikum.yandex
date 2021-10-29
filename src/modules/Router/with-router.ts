import { Component } from '~/src/modules/Ryabact';
import Router from './Router';

export default function withRouter(Block: typeof Component): typeof Component {
  return class WithRouter extends Block {
    router: Router;

    constructor(props: any) {
      super(props);
      this.router = new Router();
    }
  };
};
