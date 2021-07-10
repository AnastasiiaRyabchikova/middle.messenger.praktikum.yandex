import template from './index.tpl';
import * as styles from './styles.module.css';
import Templator from '~/templator';
import cx from '~/src/utils/classnames';

const Button = (ctx) => {
  const props = {
    class: cx([styles.button, ctx.class]),
    type: ctx.type || 'button',
    label: ctx.label,
  };

  return new Templator({
    template,
  }).compile(props);
};

export default Button;
