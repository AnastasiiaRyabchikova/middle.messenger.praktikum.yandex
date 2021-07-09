import styles from './styles.module.css';

const template =`
  <label class="${styles.wrapper}">
    <t-if={{label}}>
      <span
        class="${styles.label}"
      >
        {{label}}
      </span>
    </t-if>
    <input
      type="{{type}}"
      placeholder="{{placeholder}}"
      name="{{name}}"
      class="{{inputClass}}"
    />
    <t-if={{shouldShowError}}>
      <span
        class="${styles.errorMessage}"
      >
        Неверный логин
      </span>
    </t-if>
  </label>
`;

export default template;
