import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import cx from 'classnames';
import ChatHistory from '~/src/modules/ChatHistory';
import MessageTextarea from '../MessageTextarea';
import Header from '../Header';
import template from './index.tpl';
import { messages } from './mocks';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      messages,
      class: cx([styles.chat, context.class]),
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
      containerTemplate: `<span />`,
    });
  }
};
