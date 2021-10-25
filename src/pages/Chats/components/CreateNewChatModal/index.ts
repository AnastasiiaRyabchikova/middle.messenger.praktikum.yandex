import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import CloseButton from '~/src/components/CloseButton';
import { CreateChatData } from '~/src/api/chat-api';
import ChatControler from '~/src/controlers/chat-controler';
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
      async handleFormSubmit(params: CreateChatData) {
        await ChatControler.create(params);
        await context.evSubmit();
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
