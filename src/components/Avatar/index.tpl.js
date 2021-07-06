import styles from './styles.module.css';

const template = `
  <div
    className="{{className}}"
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
