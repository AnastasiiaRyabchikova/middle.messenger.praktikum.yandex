import styles from './styles.module.css';

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
        <Companion
          id="{{chat.id}}"
          src="{{chat.avatar}}"
          name="{{chat.title}}"
          surname="{{chat.surname}}"
          unreadMessagesCount="{{chat.unreadMessagesCount}}"
          date="{{chat.date}}"
          message="{{chat.message}}"
          link="{{chat.link}}"
          onClick="{{handleCompanionClick}}"
        />
      </t-for>
    </div>
  </div>
  <t-if={{selectedChat}}>
    <div
      class="${styles.chatWrapper}"
    >
      <Header
        title="{{currentChat.title}}"
        evAddUserSubmit="{{handleAddUserSubmit}}"
        evARemoveUserSubmit="{{handleRemoveUserSubmit}}"
      />
      <Chat
        chatId="{{selectedChat}}"
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
    <CreateNewChatModal
      evClose="{{handleCloseModalClick}}"
      evSubmit="{{handleCreateNewChatSubmit}}"
    />
  </t-if>
</div>
`;

export default template;
