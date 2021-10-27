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
    <div
      class="${styles.side}"
    >
      <ButtonBack
        onClick="{{handleBackClick}}"
      />
    </div>
    <div class="${styles.form_wrapper}">
      <AddAvatar
        class="${styles.avatar}"
        onSubmit="{{handleAddAvatarSubmit}}"
      />
      <Form
        onSubmit="{{handleFormSubmit}}"
      />
      <LogoutButton />
    </div>
  </main>
</div>
`;

export default template;
