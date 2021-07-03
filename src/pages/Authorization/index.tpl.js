import styles from './styles.module.css';

const template = `
<div
  className="${styles.page}"
>
  <header>
    <Logo
      className="{{className}}"
    />
  </header>
  <main
    className="${styles.main}"
  >
    <h1
      className="title title_h1 ${styles.title}"
    >
      Авторизация
    </h1>
    <form>
      <UIInput
        label="Логин"
        placeholder="Ваш логин"
      />
      <UIInput
        label="Пароль"
        placeholder="Ваш пароль"
      />
      <Button
        type="submit"
        className="${styles.submit}"
        label="Войти"
      />
      <a
        href="#"
        className="${styles.join}"
      >
        Присоединиться
      </a>
    </form>
  </main>
</div>
`;

export default template;