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
      <Textarea
        type="{{type}}"
        placeholder="{{placeholder}}"
        name="{{name}}"
        class="${styles.textarea}"
        value="{{value}}"
        onFocus="{{handleTextareaFocus}}"
        onBlur="{{handleTextareaBlur}}"
        onInput="{{handleTextareaInput}}"
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
