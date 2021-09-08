import * as styles from './styles.module.css';

const template: string = `
<form
  class="${styles.account}"
  name="{{name}}"
>
  <Avatar
    class="${styles.avatar}"
  />
  
  <div>
    <t-for={{input of inputs}}>
      <UIInput
        class="${styles.field}"
        label="{{input.label}}"
        name="{{input.name}}"
        placeholder="{{input.placeholder}}"
        appearance="solid"
        value="{{input.value}}"
      />
    </t-for>
    <Button
      type="submit"
      class="${styles.submit}"
      label="Сохранить"
    />
  </div>
</form>
`;

export default template;
