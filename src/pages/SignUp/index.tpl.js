import routes from '~/src/constants/routes';
import * as general from '~/src/theme/general.css';

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
      Авторизация
    </h1>
    <form
      action="/${routes.chats}"
    >
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
        href="${routes.signIn}"
        class="${styles.join}"
      >
        Присоединиться
      </a>
    </form>
    <a
      class="${styles.shredinger}"
      href="/i-am-exist"
    >
      Страница Шредингера
    </a>
    <a
      class="${styles.shredinger}"
      href="/${routes.error500}"
    >
      Страница с ошибкой 500
    </a>
  </main>
</div>
`;

export default template;
