import template from './index.tpl';
import styles from './styles.module.css';
import Templator from '../../../templator/Templator';

const componentWithProps = {
  className: `${styles.button} `
}

export default new Templator(template);
