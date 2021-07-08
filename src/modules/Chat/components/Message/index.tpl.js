import styles from './styles.module.css';

const template = `
<div
  className="{{className}}"
>
  <Avatar
    src="{{src}}"
    className="${styles.avatar}"
  />
  <div
    className="${styles.text}"
  >
    <div>
      {{text}}
    </div>
    <div
      className="${styles.time}"
    >
      {{time}}
    </div>
  </div>
</div>
`;

export default template;
