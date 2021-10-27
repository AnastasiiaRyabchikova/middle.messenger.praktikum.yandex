import routes from '@/constants/pathnames';
import * as general from '@/theme/general.css';

import styles from './styles.module.css';

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
    <RouterLink
      to="${routes.signIn}"
      class="${styles.join}"
      text="Присоединиться"
    />
    <RouterLink
      class="${styles.shredinger}"
      to="/i-am-exist"
      text="Страница Шредингера"
    />
  </main>
</div>
`;

export default template;
