import * as styles from './styles.module.css';

const template: string = `
<div
  class="${styles.companion}"
>
  <Avatar
    src="{{src}}"
    initials="{{initials}}"
  />
  <div>
    <div
      class="${styles.name}"
    >
      {{name}}
    </div>
    <div
      class="${styles.message}"
    >
      {{message}}
    </div>
  </div>
  <div>
    <div
      class="${styles.date}"
    >
      {{date}}
    </div>
    <t-if={{unreadMessagesCount}}>
      <div
        class="${styles.indicator}"
      >
        {{unreadMessagesCount}}
      </div>
    </t-if>
  </div>
</div>
`;

export default template;
