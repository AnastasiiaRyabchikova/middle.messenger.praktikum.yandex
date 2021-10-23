import pathnames from '~/src/constants/pathnames';
import * as general from '~/src/theme/general.css';
import * as styles from './styles.module.css';

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
