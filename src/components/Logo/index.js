import Templator from '~/templator';

import template from './index.tpl';

const Logo = (ctx) => {
  return new Templator(template).compile(ctx);
};

export default Logo;
