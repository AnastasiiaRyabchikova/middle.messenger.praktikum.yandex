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
      class="${styles.side}"
    >
      <a
        href="#"
        class="${styles.left}"
      >
        <IconArrowLeft />
      </a>
    </div>
    <Form
      onSubmit="{{handleFormSubmit}}"
    />
  </main>
</div>
`;

export default template;
