import * as Ryabact from 'ryabact';
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
        styles.wrapper,
        context.class,
      ]),
    };

    super({
      props,
      name: 'AddAvatarUserForm',
      template,
      components: {
        Avatar,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
