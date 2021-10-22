import * as Ryabact from '~/src/modules/Ryabact';
import cx from 'classnames';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      class: cx([
        styles.message,
        context.class,
        { [styles.isMine]: Boolean(context.isMine) },
      ]),
      src: context.src,
      text: context.text,
      isMine: context.isMine,
      time: context.time,
    };

    super({
      props,
      name: 'ChatCompanion',
      template,
      components: {
        Avatar,
      },
      containerTemplate: '<span />',
    });
  }
};
