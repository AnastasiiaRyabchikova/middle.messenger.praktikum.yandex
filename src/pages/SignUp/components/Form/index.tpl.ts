import * as styles from './styles.module.css';

const template: string = `
<form
  name="{{name}}"
  novalidate=""
>
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="login"
    label="Логин"
    placeholder="Ваша логин"
    required="required"
    error="{{errors.login}}"
    value="{{params.login}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="password"
    label="Пароль"
    placeholder="*********"
    type="password"
    required="required"
    error="{{errors.password}}"
    value="{{params.password}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <Button
    type="submit"
    class="${styles.submit}"
    label="Войти"
  />
</form>
`;

export default template;
