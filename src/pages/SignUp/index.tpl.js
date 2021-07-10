import styles from './styles.module.css';

const template = `
<div
  class="${styles.page}"
>
  <header>
    <Logo
      class="{{class}}"
    />
  </header>
  <main
    class="${styles.main}"
  >
    <h1
      class="title title_h1 ${styles.title}"
    >
      Авторизация
    </h1>
    <form>
      <UIInput
        name="login"
        label="Логин"
        placeholder="Ваш логин"
      />
      <UIInput
        name="password"
        label="Пароль"
        placeholder="Ваш пароль"
      />
      <Button
        type="submit"
        class="${styles.submit}"
        label="Войти"
      />
      <a
        href="#"
        class="${styles.join}"
      >
        Присоединиться
      </a>
    </form>
  </main>
</div>
`;

export default template;