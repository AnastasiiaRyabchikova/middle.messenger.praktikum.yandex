import { Component } from 'ryabact';
import Router from './Router';

export default function withRouter(Block: typeof Component): typeof Component {
  return class WithRouter extends Block {
    router: Router;

    constructor(props: any) {
      super(props);
      this.router = new Router();
    }

    componentDidRender() {
      super.componentDidRender();
      const links = this.element.querySelectorAll('a[data-type="router-link"]');
      links.forEach((link) => {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault();
          const { to } = <HTMLLinkElement>e.currentTarget.dataset;
          this.router.go(to);
        });
      });
    }
  };
};
