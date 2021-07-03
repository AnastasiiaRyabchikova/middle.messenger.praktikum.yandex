import styles from './styles.module.css';

const template =`
  <label className="${styles.wrapper}">
    <span
      className="${styles.label}"
    >
      {{label}}
    </span>
    <input
      type="{{type}}"
      placeholder="{{placeholder}}"
      name="{{name}}"
      className="{{inputClassName}}"
    />
    <t-if={{shouldShowError}}>
      <span
        className="${styles.errorMessage}"
      >
        Неверный логин
      </span>
    </t-if>
  </label>
`;

export default template;
