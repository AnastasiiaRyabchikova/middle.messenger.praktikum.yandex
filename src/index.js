import Templator from '../templator/Templator';

const tpl = `
<div
  className={{wrapper}}
>
  {{name}}
  <div>
    {{name}}
  </div>
</div>
`;

const div = new Templator(tpl);
console.log(div.compile({ name: 'Саша' }));

