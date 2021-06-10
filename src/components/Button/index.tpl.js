import styles from './styles.module.css';
console.log(styles);

const template =`
  <button
    type={{type}}
    className="${styles.button}"
  >
    {{children}}
  </button>
`;

export default template;
