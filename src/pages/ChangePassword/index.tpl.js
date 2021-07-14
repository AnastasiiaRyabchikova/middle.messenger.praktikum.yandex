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
    <div
      class="${styles.side}"
    >
      <a
        href="#"
        class="${styles.left}"
      >
        <IconArrowLeft />
      </a>
    </div>
    <form
      class="${styles.account}"
    >
      <Avatar
        class="${styles.avatar}"
      />
      
      <div>
        <t-for={{input of inputs}}>
          <UIInput
            class="${styles.field}"
            label="{{input.label}}"
            placeholder="{{input.placeholder}}"
            appearance="solid"
            value="{{input.value}}"
          />
        </t-for>
        <Button
          type="submit"
          class="${styles.submit}"
          label="Сохранить"
        />
      </div>
    </form>
  </main>
</div>
`;

export default template;
