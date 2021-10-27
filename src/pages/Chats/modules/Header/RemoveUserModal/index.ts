import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import CloseButton from '@/components/CloseButton';
import Form from './Form';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: any = {}) {
    /* eslint-disable */
    const props: PropsType = {
      ...context,
      handleCloseButtonClick() {
        context.evClose();
      },
      async handleFormSubmit(users: number[]) {
        await context.evSubmit(users);
        context.evClose();
      },
    };
    /* eslint-disable */

    super({
      props,
      name: 'RemoveUserModal',
      template,
      components: {
        CloseButton,
        Form,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
