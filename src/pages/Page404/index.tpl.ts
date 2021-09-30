import * as styles from './styles.module.css';

const template: string = `
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
    <div
      class="${styles.code}"
    >
      404
    </div>
    <div
      class="${styles.content}"
    >
      <div
        class="${styles.title}"
      >
        Error 404
      </div>
      <div>
        Страница не найдена
      </div>
      <a
        href="/"
        class="${styles.link}"
      >
        Вернуться
      </a>
    </div>
  </main>
</div>
`;

export default template;
