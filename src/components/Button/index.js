import template from './index.tpl';
import styles from './styles.module.css';
import Templator from '../../../templator/Templator';

const Button = (ctx) => {
  const props = {
    className: `${styles.button} ${ctx.className}`,
    type: ctx.type || 'button',
  };

  return new Templator(template).compile(props);
};

export default Button;
