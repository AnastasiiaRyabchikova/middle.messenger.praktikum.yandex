import styles from './styles.module.css';

const template: string = `
<div class="${styles.modal}">
  <div class="${styles.header}">
    <div class="${styles.title}">
      Добавление нового пользователя
    </div>
    <CloseButton
      onClick="{{handleCloseButtonClick}}"
    />
  </div>
  <Form
    onSubmit="{{handleFormSubmit}}"
  />
</div>
`;

export default template;
