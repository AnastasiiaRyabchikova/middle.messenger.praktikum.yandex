import { render } from '../../templator';
import { Component } from '../../Ryabact';
import { ComponentConstructable } from '~/src/types/component';

interface Props {
  rootQuery: HTMLElement | undefined;
  [key: string]: unknown;
};

export default class Route {
  _pathname: string = '';

  _blockClass: ComponentConstructable;

  _block: Component | null;

  _props: Props;

  constructor(
    pathname: string,
    view: ComponentConstructable,
    props: Props,
  ) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.componentDelete();
    }
  }

  match(pathname: string): boolean {
    return pathname === this._pathname;
  }

  render(): void {
    this._block = new this._blockClass();
    render(this._props.rootQuery, this._block.element);
  }
};
