import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import CloseButton from '@/components/CloseButton';
import { CreateChatData } from '@/api/chat-api';
import ChatControler from '@/controlers/chat-controler';
import Form from './Form';
import template from './index.tpl';
import styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: any = {}) {
    /* eslint-disable */
    const props: PropsType = {
      ...context,
      handleCloseButtonClick() {
        context.evClose();
      },
      async handleFormSubmit(params: CreateChatData) {
        await ChatControler.create(params);
        await context.evSubmit();
        context.evClose();
      },
    };
    /* eslint-disable */

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
