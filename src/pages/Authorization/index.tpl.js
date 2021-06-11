import styles from './styles.module.css';

console.log(styles);

const template = `
<div
  className="${styles.page}"
>
  <h1
    className="title ${styles.title}"
  >
    Авторизация
  </h1>
</div>
`;

export default template;