import styles from './styles.module.css';

const template: string = `
<form
  name="{{name}}"
  novalidate=""
>
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="email"
    label="Почта"
    placeholder="Ваша почта"
    required="{{required.email}}"
    error="{{errors.email}}"
    value="{{params.email}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="login"
    label="Логин"
    placeholder="Ваш логин"
    required="{{required.login}}"
    error="{{errors.login}}"
    value="{{params.login}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="first_name"
    label="Имя"
    placeholder="Ваше имя"
    required="{{required.first_name}}"
    error="{{errors.first_name}}"
    value="{{params.first_name}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="second_name"
    label="Фамилия"
    placeholder="Ваша фамилия"
    required="{{required.second_name}}"
    error="{{errors.second_name}}"
    value="{{params.second_name}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    type="tel"
    class="${styles.input}"
    appearance="solid"
    name="phone"
    label="Номер телефона"
    placeholder="+7( ___ ) ___-__-__"
    required="{{required.phone}}"
    error="{{errors.phone}}"
    value="{{params.phone}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="password"
    label="Пароль"
    placeholder="************"
    required="{{required.password}}"
    error="{{errors.password}}"
    value="{{params.password}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <UIInput
    class="${styles.input}"
    appearance="solid"
    name="password_repeat"
    label="Повторите пароль"
    placeholder="************"
    required="{{required.password_repeat}}"
    error="{{errors.password_repeat}}"
    value="{{params.password_repeat}}"
    evBlur="{{handleInputBlur}}"
    evInput="{{handleParamsInput}}"
  />
  <Button
    type="submit"
    class="${styles.submit}"
    label="Присоединиться"
  />
</form>
`;

export default template;
