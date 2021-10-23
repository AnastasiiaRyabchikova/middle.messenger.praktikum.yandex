import * as styles from './styles.module.css';

const template: string = `
  <form
    novalidate="novalidate"
  >
    <UIInput
      name="title"
      error="{{errors.title}}"
      label="Введите название"
      inputClass="${styles.input}"
      onInput="{{handleParamsInput}}"
    />
    <div
      class="${styles.footer}"
    >
      <Button
        type="submit"
        label="создать"
      />
    </button>
  </form>
`;

export default template;
