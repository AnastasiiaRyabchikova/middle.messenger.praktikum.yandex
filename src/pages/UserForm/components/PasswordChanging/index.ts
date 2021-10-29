import * as Ryabact from '~/src/modules/Ryabact';
import cx from 'classnames';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import RouterLink from '~/src/components/RouterLink';
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
