import styles from './styles.module.css';

const template =`
  <label className="${styles.wrapper}">
    <input
      type="{{type}}"
      placeholder="{{placeholder}}"
      className="${styles.input}"
    />
    <span
      className="${styles.label}"
    >
      {{label}}
    </span>
  </label>
`;

export default template;
