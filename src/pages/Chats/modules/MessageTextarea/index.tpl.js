import * as styles from './styles.module.css';

const template = `
<form
  class="${styles.wrapper}"
>
  <textarea
    class="${styles.textarea}"
  />
  <button
    type="submit"
    class="button-reset ${styles.submit}"
  >
    <IconArrow
      class="${styles.icon}"
    />
  </button>
</form>
`;

export default template;