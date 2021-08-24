import { PropsType } from '~/src/types/component';
// import Templator from 'templator';
// import cx from 'classnames';
import * as Ryabact from 'ryabact';
// import template from './index.tpl';
// import * as styles from './styles.module.css';

export default class Button extends Ryabact.Component {
  constructor (props: PropsType) {
    super({
      props,
      name: 'Button',
    });
  }
};

// const component: ComponentType = {
//   name: 'Button',
//   template,
// };

// const Button: Function = (props: PropsType = {}): compiledComponentType => {
//   const ctx = {
//     class: cx([styles.button, props.class]),
//     type: props.type || 'button',
//     label: props.label,
//   };

//   return new Templator(component).compile(ctx);
// };

// export default Button;
