import * as general from '@/theme/general.css';

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
    class="${general.buttonReset} ${styles.submit}"
  >
    <IconArrow
      class="${styles.icon}"
    />
  </button>
</form>
`;

export default template;