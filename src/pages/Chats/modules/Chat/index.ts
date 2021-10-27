import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { connect } from '@/store';
import { PropsType } from '@/types/component';
import { ChatControler } from '@/controlers';
import { isArray, isObject } from '@/utils/format-checking';
import ChatHistory from '../ChatHistory';
import MessageTextarea from '../MessageTextarea';
import Header from '../Header';
import template from './index.tpl';
import * as styles from './styles.module.css';

type chatMessage = {
  content: string;
  time: string;
  user_id: number,
};

type outputMessage = {
  text: string;
  time: string;
  isMine: boolean,
};

const messageFormat = (message: chatMessage, userId: number): outputMessage => ({
  text: message.content,
  time: message.time,
  isMine: userId === message.user_id,
});

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
        content: '0',
        type: 'get old',
      }));
    });

    socket.addEventListener('message', (e: Event) => {
      const { messages } = this.props;
      const data = JSON.parse(e.data);
      if (isArray(data)) {
        this.setProps({
          messages: [
            ...messages,
            ...data.map((item) => messageFormat(item, userId)),
          ],
        });
      } else if (isObject(data)) {
        const message = messageFormat(data, userId);
        this.setProps({
          messages: [
            ...messages,
            message,
          ],
        });
      }
    });
  }
};

export default connect(
  (state) => ({ user: state.user.profile }),
  Chat,
);
