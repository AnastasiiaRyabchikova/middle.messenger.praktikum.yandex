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
    {{text}}
  </div>
</div>
`;

export default template;
