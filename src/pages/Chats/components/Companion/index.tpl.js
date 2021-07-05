import styles from './styles.module.css';

const template = `
<div
  className="${styles.companion}"
>
  <Avatar
    src="{{src}}"
  />
  {{name}} {{surname}}
</div>
`;

export default template;
