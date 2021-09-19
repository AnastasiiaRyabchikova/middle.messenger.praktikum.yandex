import * as styles from './styles.module.css';

const template: string = `
<form
  class="${styles.account}"
  name="{{name}}"
  novalidate="novalidate"
>
  <Avatar
    class="${styles.avatar}"
  />
  
  <div>
    <UIInput
      class="${styles.field}"
      label="Старый пароль"
      name="old_password"
      placeholder="********"
      appearance="solid"
      value="{{params.old_password}}"
      error="{{errors.old_password}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Новый пароль"
      name="new_password"
      placeholder="********"
      appearance="solid"
      value="{{params.new_password}}"
      error="{{errors.new_password}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Повторите пароль"
      name="new_password_repeat"
      placeholder="********"
      appearance="solid"
      value="{{params.new_password_repeat}}"
      error="{{errors.new_password_repeat}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <Button
      type="submit"
      class="${styles.submit}"
      label="Сохранить"
    />
  </div>
</form>
`;

export default template;
