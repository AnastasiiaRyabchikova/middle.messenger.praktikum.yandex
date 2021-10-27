import pathnames from '../../constants/pathnames';
import * as general from '../../theme/general.css';
import styles from './styles.module.css';

const template: string = `
  <button
    type="button"
    data-to="${pathnames.userForm}"
    class="${general.buttonReset} ${styles.button}"
  >
    <IconArrowLeft />
  </button>
`;

export default template;
