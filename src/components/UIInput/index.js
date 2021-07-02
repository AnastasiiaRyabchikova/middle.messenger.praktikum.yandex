import Templator from '~/templator';

import template from './index.tpl';

const component = {
  template,
};

const UIInput = (ctx) => {
  const context = {
    label: ctx.label,
    type: ctx.type || 'text',
    placeholder: ctx.placeholder,
    name: ctx.name,
    error: ctx.error,
    shouldShowError: Boolean(ctx.error),
  };
  return new Templator(component).compile(context);
};

export default UIInput;
