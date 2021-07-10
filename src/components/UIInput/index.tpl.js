import styles from './styles.module.css';

const template =`
  <label class="{{class}}">
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
      value="{{value}}"
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
