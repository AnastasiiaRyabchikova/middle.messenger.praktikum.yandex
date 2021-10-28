import routes from '@/constants/pathnames';
import styles from './styles.module.css';

const template: string = `
  <div class="{{class}}">
    <span
      class="${styles.label}"
    >
      Пароль
    </span>
    <RouterLink
      to="${routes.changePassword}"
      class="${styles.link}"
      text="Изменить пароль"
    />
  </div>
`;

export default template;
