import Templator from '~/templator';
import cx from '~/src/utils/classnames';
import template from './index.tpl';
import styles from './styles.module.css';

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
    inputClass: cx([
      styles.input,
      { [styles.error]: ctx.error },
    ]),
    class: cx([
      styles.wrapper,
      ctx.class,
      { [styles.solid]: ctx.appearance === 'solid' }
    ]),
    value: ctx.value,
  };
  return new Templator(component).compile(context);
};

export default UIInput;
