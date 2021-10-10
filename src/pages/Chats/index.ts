import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import { PropsType } from '~/src/types/component';
import routes from '~/src/constants/pathnames';
import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';
import Header from './modules/Header';
import ToUserFormLink from './components/ToUserFormLink';
import { companions } from './mocks';
import template from './index.tpl';

const temp = /selectedChat=(.*)?/.exec(window.location.search);
const selectedChat = temp && temp[1];

const companionsMapped = companions
  .map((item) => (
    {
      ...item,
      link: `${routes.chats}?selectedChat=${item.id}`,
    }
  ));

class ChatsPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      companions: companionsMapped,
      selectedChat,
      handleToUserFormLinkClick: (e: Event) => {
        e.preventDefault();
        this.router.go(routes.userForm);
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
      },
      containerTemplate: '<div />',
    });
  }
};

export default withRouter(ChatsPage);
