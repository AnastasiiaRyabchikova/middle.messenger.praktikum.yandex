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
    <div
      class="${styles.code}"
    >
      {{code}}
    </div>
    <div
      class="${styles.content}"
    >
      <div
        class="${styles.title}"
      >
        Error {{code}}
      </div>
      <div
        class="${styles.message}"
      >
        {{message}}
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