import * as styles from './styles.module.css';

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
        required="{{required}}"
        onBlur="{{handleInputBlur}}"
        onInput="{{handleInput}}"
      />
    </label>
    <t-if={{shouldShowError}}>
      <span
        class="${styles.errorMessage}"
      >
        {{error}}
      </span>
    </t-if>
  </div>
`;

export default template;
