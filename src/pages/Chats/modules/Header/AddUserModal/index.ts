import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import CloseButton from '@/components/CloseButton';
import Form from './Form';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
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

    super({
      props,
      name: 'CreateNewChatModal',
      template,
      components: {
        CloseButton,
        Form,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
