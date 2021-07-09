import styles from './styles.module.css';

const template = `
<div
  class="${styles.page}"
>
  <div
    class="${styles.side}"
  >
    <div
      class="${styles.header}"
    >
      <Search
        class="${styles.search}"  
      />
      <Avatar
        class="${styles.avatar}"  
      />
    </div>
    <div
      class="${styles.companions}"
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
      class="${styles.content}"
    >
      <div>
        Выберите чат или 
        <a
          class="${styles.link}"
        >
          cоздайте новый
        </a>
      </div>
    </div>
  </t-if>
</div>
`;

export default template;