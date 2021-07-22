import { Component } from '~/src/types/component';
import Templator from 'templator';

import template from './index.tpl';

const component: Component = {
  name: 'Logo',
  template,
};

const Logo = (ctx) => (
  new Templator(component).compile(ctx)
);

export default Logo;
