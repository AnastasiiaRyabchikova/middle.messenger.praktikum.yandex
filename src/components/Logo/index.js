import Templator from '~/src/templator';

import template from './index.tpl';

const component = {
  template,
};

const Logo = (ctx) => (
  new Templator(component).compile(ctx)
);

export default Logo;
