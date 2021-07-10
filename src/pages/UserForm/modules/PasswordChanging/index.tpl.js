import * as style from './styles.module.css';

const template = `
  <div class="{{class}}">
    <span
      class="${styles.label}"
    >
      Пароль
    </span>
    <button
      type="button"
      class="button-reset ${styles.button}"
    >
      Изменить пароль
    </button>
  </div>
`;

export default template;