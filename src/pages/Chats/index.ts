import { Component, Props, compiledComponent } from '~/src/types/component';
import Templator from 'templator';
import routes from '~/src/constants/pathnames';

import Avatar from '~/src/components/Avatar';

import { companions } from './mocks';

import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';
import Header from './modules/Header';

import template from './index.tpl';

const temp = window.location.search.match(/selectedChat=(.*)?/);
const selectedChat = temp && temp[1];

const companionsMapped = companions
  .map((item) => (
    {
      ...item,
      link: `/${routes.chats}?selectedChat=${item.id}`,
    }
  ));

const component: Component = {
  name: 'ChatPage',
  template,
  components: {
    Companion,
    Avatar,
    Search,
    Chat,
    Header,
  },
};

const Page: Function = (props: Props = {}): compiledComponent => {
  const context = {
    ...props,
    companions: companionsMapped,
    selectedChat,
  };
  return new Templator(component).compile(context);
};

export default Page;
