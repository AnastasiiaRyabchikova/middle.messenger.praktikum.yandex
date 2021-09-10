import * as styles from './styles.module.css';

const template: string = `
  <label class="{{class}}">
    <t-if={{label}}>
      <span
        class="${styles.label}"
      >
        {{label}}
      </span>
    </t-if>
    <Input
      type="{{type}}"
      placeholder="{{placeholder}}"
      name="{{name}}"
      class="{{inputClass}}"
      value="{{value}}"
      required="{{required}}"
      onBlur="{{handleInputBlur}}"
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
