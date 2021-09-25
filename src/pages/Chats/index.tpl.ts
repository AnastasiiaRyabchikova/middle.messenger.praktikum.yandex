import routes from '~/src/constants/pathnames';

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
      <a
        href="${routes.userForm}"
        class="${styles.avatarLink}"
      >
        <Avatar
          class="${styles.avatar}"  
        />
      </a>
    </div>
    <div
      class="${styles.companions}"
    >
      <t-for={{companion of companions}}>
        <a
          href="{{companion.link}}"
          class="${styles.companionLink}"
        >
          <Companion
            name="{{companion.name}}"
            surname="{{companion.surname}}"
            unreadMessagesCount="{{companion.unreadMessagesCount}}"
            date="{{companion.date}}"
            message="{{companion.message}}"
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
