import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import { ChatControler } from '~/src/controlers';
import { PropsType } from '~/src/types/component';
import routes from '~/src/constants/pathnames';
import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';
import Header from './modules/Header';
import ToUserFormLink from './components/ToUserFormLink';
import CreateNewChatButton from './components/CreateNewChatButton';
import template from './index.tpl';

const temp = /selectedChat=(.*)?/.exec(window.location.search);
const selectedChat = temp && temp[1];

class ChatsPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      chats: [],
      selectedChat,
      shouldShowCreateChatModal: false,
      handleToUserFormLinkClick: (e: Event) => {
        e.preventDefault();
        this.router.go(routes.userForm);
      },
      handleCreateNewChatButtonClick: (e: Event) => {
        this.setProps({
          shouldShowCreateChatModal: true,
        });
      },
    };

    super({
      props,
      name: 'ChatPage',
      template,
      components: {
        Companion,
        Search,
        Chat,
        Header,
        ToUserFormLink,
        CreateNewChatButton,
      },
      containerTemplate: '<div />',
    });
  }

  componentDidMount() {
    ChatControler.read();
  }
};

export default withRouter(ChatsPage);
