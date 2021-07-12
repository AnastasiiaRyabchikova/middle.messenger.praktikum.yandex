import routes from '~/src/constants/routes';
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
      class="title title_h1"
    >
      Знакомство
    </h1>
    <form
      action="/${routes.chats}"
    >
      <t-for={{input of inputs}}>
        <UIInput
          class="${styles.input}"
          appearance="solid"
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
        href="/${routes.signUp}"
        class="${styles.join}"
      >
        Войти
      </a>
    </form>
  </main>
</div>
`;

export default template;
