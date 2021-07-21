import routes from '@/constants/pathnames';
import * as styles from './styles.module.css';

const template = `
  <div class="{{class}}">
    <span
      class="${styles.label}"
    >
      Пароль
    </span>
    <a
      href="${routes.changePassword}"
      class="${styles.link}"
    >
      Изменить пароль
    </a>
  </div>
`;

export default template;
