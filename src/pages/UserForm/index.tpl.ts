import routes from '~/src/constants/pathnames';
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
        href="${routes.chats}"
        class="${styles.left}"
      >
        <IconArrowLeft />
      </a>
    </div>
    <div class="${styles.form_wrapper}">
      <Form
        onSubmit="{{handleFormSubmit}}"
      />
      <LogoutButton />
    </div>
  </main>
</div>
`;

export default template;
