import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { connect } from '~/src/store';
import { PropsType } from '~/src/types/component';
import { ChatControler } from '~/src/controlers';
import ChatHistory from '../ChatHistory';
import MessageTextarea from '../MessageTextarea';
import Header from '../Header';
import template from './index.tpl';
import { messages } from './mocks';
import * as styles from './styles.module.css';

class Chat extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      chatId: context.chatId,
      token: '',
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

  async componentDidMount() {
    const { chatId } = this.props;

    const token = await ChatControler.getToken(chatId);

    const userId = this.props?.user?.id;

    const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${String(userId)}/${String(chatId)}/${token}`);

    socket.addEventListener('open', () => {
      console.log('Соединение установлено');
      socket.send(JSON.stringify({
        content: 'Моё первое сообщение миру!',
        type: 'message',
      }));
    });

    socket.addEventListener('close', (e: Event) => {
      if (e.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
      }

      console.log(`Код: ${e.code} | Причина: ${e.reason}`);
    });

    socket.addEventListener('message', (e: Event) => {
      console.log('Получены данные', e.data);
    });

    socket.addEventListener('error', (e: Event) => {
      console.log('Ошибка', e.message);
    });
  }
};

export default connect(
  (state) => ({ user: state.user.profile }),
  Chat,
);
