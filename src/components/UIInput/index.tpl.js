import styles from './styles.module.css';

const template =`
  <label className="${styles.wrapper}">
    <span
      className="${styles.label}"
    >
      {{label}}
      Your login
    </span>
    <input
      type="{{type}}"
      placeholder="{{placeholder}}"
      className="${styles.input}"
    />
  </label>
`;

export default template;
