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
  <t-if={{selectedChat}}>
    <div>
      <Chat />
    </div>
  <t-else>
    <div
      className="${styles.content}"
    >
      <div>
        Выберите чат или 
        <a
          className="${styles.link}"
        >
          cоздайте новый
        </a>
      </div>
    </div>
  </t-if>
</div>
`;

export default template;