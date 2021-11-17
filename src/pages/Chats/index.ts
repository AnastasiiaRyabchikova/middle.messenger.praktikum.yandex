import { WithRouter } from 'router';
import { ChatControler } from '@/controlers';
// import { PropsType } from '@/types/component';
import routes from '@/constants/pathnames';
import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';
import Header from './modules/Header';
import ToUserFormLink from './components/ToUserFormLink';
import CreateNewChatButton from './components/CreateNewChatButton';
import CreateNewChatModal from './components/CreateNewChatModal';
import template from './index.tpl';
import user from '@/store/user';

type PropsType = {
  chats: Record<string, any>[],
  selectedChat: number,
  shouldShowCreateChatModal: boolean,
  handleToUserFormLinkClick: (e: Event) => void,
  handleCreateNewChatButtonClick: (e: Event) => void,
  handleCloseModalClick: () => void,
  handleCreateNewChatSubmit: (e: Event) => void,
  handleCompanionClick: (e: Event) => void,
  handleAddUserSubmit: (e: Event) => void,
  handleRemoveUserSubmit: (users: number[]) => void,
};

class ChatsPage extends WithRouter {
  constructor(context: any = {}) {
    /* eslint-disable */
    const props: any = {
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
          currentChat: (this.props as PropsType).chats.find((item) => (item.id === Number(id))),
        });
      },
      handleAddUserSubmit: async (users: number[]) => {
        const { selectedChat } = this.props;

        if (!users.length || !selectedChat) {
          return;
        }

        await ChatControler.addUsers({
          users,
          chatId: Number(selectedChat),
        });
      },
      handleRemoveUserSubmit: async (users: number[]) => {
        const { selectedChat } = this.props;

        if (!user.length || !selectedChat) {
          return;
        }
        await ChatControler.removeUsers({
          users,
          chatId: Number(selectedChat),
        });
      },
    };
    /* eslint-disable */

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

export default ChatsPage;
