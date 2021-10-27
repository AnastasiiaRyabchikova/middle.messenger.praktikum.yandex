import cx from 'classnames';
import * as Ryabact from 'ryabact';
import IconTimes from '@/icons/Times';
import * as general from '@/theme/general.css';
import { PropsType } from '../../types/component';
import template from './index.tpl';
import styles from './styles.module.css';

export default class CloseButton extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      class: cx([general.buttonReset, styles.button, context.class]),
      label: context.label,
      events: context.events,
    };

    super({
      props,
      name: 'CloseButton',
      template,
      containerTemplate: '<span />',
      components: {
        IconTimes,
      },
    });
  }
};
