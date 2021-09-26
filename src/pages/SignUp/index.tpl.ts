import routes from '~/src/constants/pathnames';
import * as general from '~/src/theme/general.css';

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
    <h1
      class="${general.title} ${general.titleH1}"
    >
      Авторизация
    </h1>
    <Form
      onSubmit="{{handleFormSubmit}}"
    />
    <a
      href="${routes.signIn}"
      class="${styles.join}"
    >
      Присоединиться
    </a>
    <a
      class="${styles.shredinger}"
      href="/i-am-exist"
    >
      Страница Шредингера
    </a>
    <a
      class="${styles.shredinger}"
      href="${routes.error500}"
    >
      Страница с ошибкой 500
    </a>
  </main>
</div>
`;

export default template;
