import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { PropsType } from '@/types/component';
import UIInput from '@/components/UIInput';
import RouterLink from '@/components/RouterLink';
import template from './index.tpl';
import styles from './styles.module.css';

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
      name: 'PasswordChangingPage',
      template,
      components: {
        UIInput,
        RouterLink,
      },
      containerTemplate: '<span />',
    });
  }
};
