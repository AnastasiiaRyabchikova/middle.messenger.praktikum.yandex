const template = `
<div>
  <t-for={{message of messages}}>
    <Message
      text="{{message.text}}"
      isMine="{{message.isMine}}"
      time="{{message.time}}"
    />
  </t-for>
</div>
`;

export default template;