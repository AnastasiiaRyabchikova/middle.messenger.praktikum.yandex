import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { PropsType } from '~/src/types/component';
import ChatHistory from '~/src/modules/ChatHistory';
import MessageTextarea from '../MessageTextarea';
import Header from '../Header';
import template from './index.tpl';
import { messages } from './mocks';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      messages,
      class: cx([styles.chat, context.class]),
      handleFormSubmit: (params: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
        console.log(params);
      },
    };

    super({
      props,
      name: 'ChatModuleChatsPage',
      template,
      components: {
        Header,
        ChatHistory,
        MessageTextarea,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
