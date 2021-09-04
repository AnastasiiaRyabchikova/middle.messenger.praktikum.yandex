import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import cx from 'classnames';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      class: cx([styles.avatar, context.class]),
    };

    super({
      props,
      name: 'Avatar',
      template,
      containerTemplate: `<span />`,
    });
  }
};
