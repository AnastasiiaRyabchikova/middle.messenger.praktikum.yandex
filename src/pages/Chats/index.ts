import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import routes from '~/src/constants/pathnames';
import Avatar from '~/src/components/Avatar';
import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';
import Header from './modules/Header';
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

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      companions: companionsMapped,
      selectedChat,
    };

    super({
      props,
      name: 'ChatPage',
      template,
      components: {
        Companion,
        Avatar,
        Search,
        Chat,
        Header,
      },
      containerTemplate: '<div />',
    });
  }
};
