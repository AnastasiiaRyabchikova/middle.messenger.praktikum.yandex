import general from '@/theme/general.css';

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
      Идет проверка авторизации...
    </h1>
  </main>
</div>
`;

export default template;
