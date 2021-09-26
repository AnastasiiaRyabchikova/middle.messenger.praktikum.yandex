import pathnames from '~/src/constants/pathnames';
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
    <div
      class="${styles.side}"
    >
      <a
        data-type="router-link"
        href="${pathnames.userForm}"
        data-to="${pathnames.userForm}"
        class="${styles.left}"
      >
        <IconArrowLeft />
      </a>
    </div>
    <div class="${styles.form}">
      <Form
        onSubmit="{{handleFormSubmit}}"
      />
    </div>
  </main>
</div>
`;

export default template;
