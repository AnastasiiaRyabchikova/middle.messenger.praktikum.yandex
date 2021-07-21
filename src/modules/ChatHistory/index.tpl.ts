import * as styles from './styles.module.css';

const template: string = `
<div>
  <t-for={{message of messages}}>
    <Message
      class="${styles.message}"
      text="{{message.text}}"
      isMine="{{message.isMine}}"
      time="{{message.time}}"
    />
  </t-for>
</div>
`;

export default template;
