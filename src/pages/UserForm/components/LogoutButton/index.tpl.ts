import * as general from '~/src/theme/general.css';
import * as styles from './styles.module.css';

const template: string = `
<button
  type="button"
  class="${general.buttonReset} ${styles.logout}"
>
  Выйти
</a>
`;

export default template;
