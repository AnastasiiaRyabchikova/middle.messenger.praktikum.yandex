import Templator from '~/templator';
import cx from '../../utils/classnames';
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
    inputClassName: cx([styles.input, { [styles.error]: ctx.error }]),
  };
  return new Templator(component).compile(context);
};

export default UIInput;
