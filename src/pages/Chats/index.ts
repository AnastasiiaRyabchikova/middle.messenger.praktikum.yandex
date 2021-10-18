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
import CreateNewChatModal from './components/CreateNewChatModal';
import template from './index.tpl';

class ChatsPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      chats: [],
      selectedChat: undefined,
      shouldShowCreateChatModal: false,
      handleToUserFormLinkClick: (e: Event) => {
        e.preventDefault();
        this.router.go(routes.userForm);
      },
      handleCreateNewChatButtonClick: () => {
        this.setProps({
          shouldShowCreateChatModal: true,
        });
      },
      handleCloseModalClick: () => {
        this.setProps({
          shouldShowCreateChatModal: false,
        });
      },
      handleCreateNewChatSubmit: async () => {
        const chats = await ChatControler.read();
        this.setProps({
          chats,
        });
      },
      handleCompanionClick: (e: Event) => {
        const { id } = (e.target as HTMLButtonElement).dataset;
        if (!id) {
          return;
        }
        this.setProps({
          selectedChat: id,
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
        CreateNewChatModal,
      },
      containerTemplate: '<div />',
    });
  }

  async componentDidMount() {
    const chats = await ChatControler.read();
    this.setProps({
      chats,
    });
  }
};

export default withRouter(ChatsPage);
