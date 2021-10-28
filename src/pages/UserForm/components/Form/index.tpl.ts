import styles from './styles.module.css';

const template: string = `
  <form
    name="{{name}}"
  >
    <UIInput
      class="${styles.field}"
      label="Почта"
      placeholder="Ваша почта"
      name="email"
      appearance="solid"
      error="{{errors.email}}"
      value="{{params.email}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Логин"
      placeholder="Ваш логин"
      name="login"
      appearance="solid"
      value="{{params.login}}"
      error="{{errors.login}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Имя"
      placeholder="Ваше имя"
      name="first_name"
      appearance="solid"
      value="{{params.first_name}}"
      error="{{errors.first_name}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Фамилия"
      placeholder="Ваше фамилия"
      name="second_name"
      appearance="solid"
      value="{{params.second_name}}"
      error="{{errors.second_name}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Ник"
      placeholder="Ваш ник"
      name="display_name"
      appearance="solid"
      value="{{params.display_name}}"
      error="{{errors.display_name}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
    <UIInput
      class="${styles.field}"
      label="Номер телефона"
      placeholder="+7(___)___-___-__"
      name="phone"
      appearance="solid"
      value="{{params.phone}}"
      error="{{errors.phone}}"
      evBlur="{{handleInputBlur}}"
      evInput="{{handleParamsInput}}"
    />
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
