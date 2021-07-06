import styles from './styles.module.css';

const template =`
  <label className="${styles.wrapper}">
    <t-if={{label}}>
      <span
        className="${styles.label}"
      >
        {{label}}
      </span>
    </t-if>
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
