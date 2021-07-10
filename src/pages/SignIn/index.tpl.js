import * as styles from './styles.module.css';

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
      Знакомство
    </h1>
    <form>
      <t-for={{input of inputs}}>
        <UIInput
          label="{{input.label}}"
          placeholder="{{input.placeholder}}"
        />
      </t-for>
      <Button
        type="submit"
        class="${styles.submit}"
        label="Присоединиться"
      />
      <a
        href="#"
        class="${styles.join}"
      >
        Войти
      </a>
    </form>
  </main>
</div>
`;

export default template;
