import styles from './styles.module.css';

const template = `
  <div
    className="${styles.avatar}"
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
