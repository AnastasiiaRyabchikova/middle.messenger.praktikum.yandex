import styles from './styles.module.css';

const template = `
<div>
  <t-for={{message of messages}}>
    <Message
      className="${styles.message}"
      text="{{message.text}}"
      isMine="{{message.isMine}}"
      time="{{message.time}}"
    />
  </t-for>
</div>
`;

export default template;