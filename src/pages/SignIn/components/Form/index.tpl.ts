import * as styles from './styles.module.css';

const template: string = `
<form>
  <t-for={{input of inputs}}>
    <UIInput
      class="${styles.input}"
      appearance="solid"
      label="{{input.label}}"
      placeholder="{{input.placeholder}}"
    />
  </t-for>
  <Button
    type="submit"
    class="${styles.submit}"
    label="Присоединиться"
  />
</form>
`;

export default template;
