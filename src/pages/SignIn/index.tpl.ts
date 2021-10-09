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
    <RouterLink
      to="${routes.signUp}"
      class="${styles.join}"
      text="Войти"
    />
  </main>
</div>
`;

export default template;
