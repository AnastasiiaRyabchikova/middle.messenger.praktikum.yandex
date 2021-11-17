import styles from './styles.module.css';

const template: string = `
  <div class="{{class}}">
    <label class="${styles.wrapper}">
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
        onFocus="{{handleInputFocus}}"
        onBlur="{{handleInputBlur}}"
        onInput="{{handleInput}}"
      />
    </label>
    <t-if={{shouldShowError}}>
      <div
        class="${styles.errorMessage}"
      >
        {{error}}
      </div>
    </t-if>
  </div>
`;

export default template;
