import styles from './styles.module.css';

const template = `
<div
  className="${styles.page}"
>
  <div
    className="${styles.side}"
  >
    <div
      className="${styles.header}"
    >
      <Search
        className="${styles.search}"  
      />
      <Avatar
        className="${styles.avatar}"  
      />
    </div>
    <div
      className="${styles.companions}"
    >
      <t-for={{companion of companions}}>
        <Companion
          name="{{companion.name}}"
          surname="{{companion.surname}}"
          unreadMessagesCount="{{companion.unreadMessagesCount}}"
          date="{{companion.date}}"
          message="{{companion.message}}"
        />
      </t-for>
    </div>
  </div>

  <div
    className="${styles.empty}"
  >
    Выберите чат для начала общения
  </div>
</div>
`;

export default template;