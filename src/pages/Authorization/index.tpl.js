import styles from './styles.module.css';

const template = `
<div
  className="${styles.page}"
>
  <Logo
    className="{{className}}"
  >
  </Logo>
  <h1
    className="title ${styles.title}"
  >
    Авторизация
  </h1>
</div>
`;

export default template;