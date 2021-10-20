import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { connect } from '~/src/store';
import { PropsType } from '~/src/types/component';
import { ChatControler } from '~/src/controlers';
import ChatHistory from '../ChatHistory';
import MessageTextarea from '../MessageTextarea';
import Header from '../Header';
import template from './index.tpl';
import * as styles from './styles.module.css';

class Chat extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      chatId: context.chatId,
      token: '',
      socket: null,
      messages: [],
      class: cx([styles.chat, context.class]),
      handleFormSubmit: ({ text }: { text: string }) => {
        const { socket }: { socket: WebSocket } = this.props;
        socket.send(JSON.stringify({ content: text, type: 'message' }));
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
    this.setProps({ socket });

    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({
        content: 'Моё первое сообщение миру!',
        type: 'message',
      }));
    });
    socket.addEventListener('message', (e: Event) => {
      const { messages } = this.props;
      const data = JSON.parse(e.data);
      const message = {
        text: data.content,
        time: data.time,
        isMine: userId === data.user_id,
      };
      this.setProps({
        messages: [
          ...messages,
          message,
        ],
      });
    });
  }
};

export default connect(
  (state) => ({ user: state.user.profile }),
  Chat,
);
