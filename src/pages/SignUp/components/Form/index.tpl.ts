import * as styles from './styles.module.css';

const template: string = `
<form
  name="{{name}}"
>
  <t-for={{input of inputs}}>
    <UIInput
      class="${styles.input}"
      appearance="solid"
      name="{{input.name}}"
      label="{{input.label}}"
      placeholder="{{input.placeholder}}"
    />
  </t-for>
  <Button
    type="submit"
    class="${styles.submit}"
    label="Войти"
  />
</form>
`;

export default template;
