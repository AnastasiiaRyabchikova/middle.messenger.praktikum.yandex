import * as styles from './styles.module.css';

const template: string = `
<div
  class="{{class}}"
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