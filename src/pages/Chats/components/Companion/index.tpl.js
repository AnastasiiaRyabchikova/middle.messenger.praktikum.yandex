import styles from './styles.module.css';

const template = `
<div
  className="${styles.companion}"
>
  <Avatar
    src="{{src}}"
  />
  <div>
    <div
       className="${styles.name}"
    >
      {{name}} {{surname}}
    </div>
    <div
      className="${styles.message}"
    >
      {{message}}
    </div>
  </div>
  <div>
    <div
      className="${styles.date}"
    >
      {{date}}
    </div>
    <t-if={{unreadMessagesCount}}>
      <div
        className="${styles.indicator}"
      >
        {{unreadMessagesCount}}
      </div>
    </t-if>
  </div>
</div>
`;

export default template;
