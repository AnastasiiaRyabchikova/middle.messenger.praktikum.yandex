import styles from './styles.module.css';

const template = `
<div
  className="${styles.companion}"
>
  <Avatar
    src="{{src}}"
  />
  <div>
    <div>
      {{name}} {{surname}}
    </div>
    <div>
      {{message}}
    </div>
  </div>
  <div>
    <div>
      {{date}}
    </div>
    <t-if={{unreadMessagesCount}}>
      <span>
        {{unreadMessagesCount}}
      </span>
    </t-if>
  </div>
</div>
`;

export default template;
