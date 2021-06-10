// import Templator from '../templator/Templator';
import Button from './components/Button';
import render from '../templator/render';

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

// const div = new Templator(tpl);
// console.log(div.compile({ name: 'Саша' }));

render(document.getElementById('root'));
console.log(Button.compile({ type: 'button' }));

