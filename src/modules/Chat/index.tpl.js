const template = `
<div>
  <t-for={{message of messages}}>
    <Message
      text="{{message.text}}"
      isMine="{{message.isMine}}"
    />
  </t-for>
</div>
`;

export default template;