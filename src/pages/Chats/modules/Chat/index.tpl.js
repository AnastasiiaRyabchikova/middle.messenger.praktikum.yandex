import styles from './styles.module.css';

const template = `
<div
  class="${styles.chat}"
>
  <div
    class="${styles.chatHistoryWrapper}"
  >
    <ChatHistory
      messages="{{messages}}"
    />
  </div>
  <MessageTextarea />
</div>
`;

export default template;