import cx from 'classnames';
import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Button extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      class: cx([styles.button, context.class]),
      type: context.type || 'button',
      label: context.label,
      events: context.events,
    };

    super({
      props,
      name: 'Button',
      template,
      containerTemplate: '<span />',
    });
  }
};
