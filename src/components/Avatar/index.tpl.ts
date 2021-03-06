const template: string = `
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
    </t-if>
  </div>
`;

export default template;
