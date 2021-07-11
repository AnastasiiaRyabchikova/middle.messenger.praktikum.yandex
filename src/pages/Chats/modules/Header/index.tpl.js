import * as styles from './styles.module.css';

const template = `
<div
  class="${styles.header}"
>
  <Avatar />
  <div
    class="${styles.name}"
  >
    Александр
  </div>
  <button
    type="button"
    class="button-reset ${styles.search}"
  >
    Поиск
  </button>
  <button
    class="button-reset"
  >
    <IconEllipsisVAlt />
  </button>
</div>
`;

export default template;
