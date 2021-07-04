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
        className="${styles.submit}"
        label="Присоединиться"
      />
      <a
        href="#"
        className="${styles.join}"
      >
        Войти
      </a>
    </form>
  </main>
</div>
`;

export default template;