import * as styles from './styles.module.css';

const template: string = `
<div
  class="{{class}}"
>
  <Avatar
    src="{{src}}"
    class="${styles.avatar}"
  />
  <div
    class="${styles.text}"
  >
    <div>
      {{text}}
    </div>
    <div
      class="${styles.time}"
    >
      {{time}}
    </div>
  </div>
</div>
`;

export default template;
