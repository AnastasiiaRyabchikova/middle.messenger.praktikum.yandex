import routes from '@/constants/pathnames';
import * as general from '@/theme/general.css';

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
      class="${general.title} ${general.titleH1}"
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
