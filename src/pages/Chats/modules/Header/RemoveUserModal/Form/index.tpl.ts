import styles from './styles.module.css';

const template: string = `
  <form
    novalidate="novalidate"
  >
    <UIInput
      name="ids"
      error="{{errors.ids}}"
      label="Введите id пользователей через запятую"
      inputClass="${styles.input}"
      onInput="{{handleParamsInput}}"
    />
    <div
      class="${styles.footer}"
    >
      <Button
        type="submit"
        label="добавить"
      />
    </button>
  </form>
`;

export default template;
