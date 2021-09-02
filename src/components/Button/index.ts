import { PropsType } from '~/src/types/component';
// import Templator from 'templator';
import cx from 'classnames';
import * as Ryabact from 'ryabact';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Button extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      class: cx([styles.button, context.class]),
      type: context.type || 'button',
      label: context.label,
      events: {
        click: (e: Event) => console.log('button-click', e)
      },
    };

    super({
      props,
      name: 'Button',
      template,
    });
  }
};
