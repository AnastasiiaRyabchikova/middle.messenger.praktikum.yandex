import * as styles from './styles.module.css';

const template: string = `
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
      <ToUserFormLink
        evClick="{{handleToUserFormLinkClick}}"
      />
    </div>
    <div
      class="${styles.companions}"
    >
      <t-for={{chat of chats}}>
        <a
          href="{{chat.link}}"
          class="${styles.companionLink}"
        >
          <Companion
            name="{{chat.name}}"
            surname="{{chat.surname}}"
            unreadMessagesCount="{{chat.unreadMessagesCount}}"
            date="{{chat.date}}"
            message="{{chat.message}}"
          />
        </a>
      </t-for>
    </div>
  </div>
  <t-if={{selectedChat}}>
    <div
      class="${styles.chatWrapper}"
    >
      <Header />
      <Chat
        class="${styles.chat}"
      />
    </div>
  <t-else>
    <div
      class="${styles.content}"
    >
      <div>
        Выберите чат или 
        <CreateNewChatButton
          onClick="{{handleCreateNewChatButtonClick}}"
        />
      </div>
    </div>
  </t-if>
  <t-if={{shouldShowCreateChatModal}}>
    <div>
       Модалка
    </div>
  </t-if>
</div>
`;

export default template;
