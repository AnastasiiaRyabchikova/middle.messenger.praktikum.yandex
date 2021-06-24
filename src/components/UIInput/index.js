import Templator from '~/templator';

import template from './index.tpl';

const component = {
  template,
};

const UIInput = (ctx) => {
  return new Templator(component).compile(ctx);
};

export default UIInput;
