import * as style from './styles.module.css';

const template = `
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