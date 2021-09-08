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
      <form>
        <AddAvatar
          class="${styles.avatar}"
        />
        <t-for={{input of inputs}}>
          <UIInput
            class="${styles.field}"
            label="{{input.label}}"
            placeholder="{{input.placeholder}}"
            appearance="solid"
            value="{{input.value}}"
          />
        </t-for>
        <PasswordChanging
          class="${styles.field}"
        />
        <Button
          type="submit"
          class="${styles.submit}"
          label="Сохранить"
        />
      </form>
      <a
        href="/${routes.signUp}"
        class="${styles.logout}"
      >
        Выйти
      </a>
    </div>
  </main>
</div>
`;

export default template;
