import * as general from '@/theme/general.css';
import * as styles from './styles.module.css';

const template: string = `
<form
  class="${styles.wrapper}"
  novalidate="novalidate"
>
  <div class="${styles.textarea}">
    <UITextarea
      name="text"
      placeholder="Сообщение"
      value="{{params.text}}"
      error="{{errors.text}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
  </div>
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
