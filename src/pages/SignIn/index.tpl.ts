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
      Знакомство
    </h1>
    <Form
      onSubmit="{{handleFormSubmit}}"
    />
    <a
      data-type="router-link"
      data-to="${routes.signUp}"
      href="${routes.signUp}"
      class="${styles.join}"
    >
      Войти
    </a>
  </main>
</div>
`;

export default template;
