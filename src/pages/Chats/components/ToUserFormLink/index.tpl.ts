import * as general from '~/src/theme/general.css';
import * as styles from './styles.module.css';

const template: string = `
<button
  class="${general.buttonReset} ${styles.avatarLink}"
>
  <Avatar />
</button>
`;

export default template;
