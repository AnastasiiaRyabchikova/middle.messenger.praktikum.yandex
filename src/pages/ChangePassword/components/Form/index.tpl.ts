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
      name="oldPassword"
      placeholder="********"
      appearance="solid"
      value="{{params.oldPassword}}"
      error="{{errors.oldPassword}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Новый пароль"
      name="newPassword"
      placeholder="********"
      appearance="solid"
      value="{{params.newPassword}}"
      error="{{errors.newPassword}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Повторите пароль"
      name="newPasswordRepeat"
      placeholder="********"
      appearance="solid"
      value="{{params.newPasswordRepeat}}"
      error="{{errors.newPasswordRepeat}}"
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
