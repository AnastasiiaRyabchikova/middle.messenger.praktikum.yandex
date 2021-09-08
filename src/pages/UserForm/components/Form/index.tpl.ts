import routes from '~/src/constants/pathnames';
import * as styles from './styles.module.css';

const template: string = `
  <form
    name="{{name}}"
  >
    <AddAvatar
      class="${styles.avatar}"
    />
    <t-for={{input of inputs}}>
      <UIInput
        class="${styles.field}"
        label="{{input.label}}"
        placeholder="{{input.placeholder}}"
        name="{{input.name}}"
        appearance="solid"
        value="{{input.value}}"
      />
    </t-for>
    <PasswordChanging
      class="${styles.field}"
    />
    <Button
      type="submit"
      class="${styles.submit}"
      label="Сохранить"
    />
  </form>
`;

export default template;
