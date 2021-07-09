import styles from './styles.module.css';

const template = `
  <div
    class="{{class}}"
  >
    <t-if={{src}}>
      <img
        src="{{src}}"
      />
    <t-else-if={{initials}}>
      <div>
        {{initials}}
      </div>
    <t-else>
      <div>
        ДЛ
      </div>
    </t-if>
  </div>
`;

export default template;
