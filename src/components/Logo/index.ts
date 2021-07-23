import { Component, Props } from '~/src/types/component';
import Templator from 'templator';

import template from './index.tpl';

const component: Component = {
  name: 'Logo',
  template,
};

const Logo = (props: Props = {}) => {
  const ctx = {
    ...props,
  };

  return new Templator(component).compile(ctx)
};

export default Logo;
