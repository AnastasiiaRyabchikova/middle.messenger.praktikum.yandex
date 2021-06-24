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
    <UIInput />
  </main>
</div>
`;

export default template;