import styles from './styles.module.css';

const template = `
<div
  className="${styles.page}"
>
  <div
    className="${styles.companions}"
  >
    <t-for={{companion of companions}}>
      <Companion
        name="{{companion.name}}"
        surname="{{companion.surname}}"
      />
    </t-for>
  </div>

  <div
    className="${styles.empty}"
  >
    Выберите чат для начала общения
  </div>
</div>
`;

export default template;