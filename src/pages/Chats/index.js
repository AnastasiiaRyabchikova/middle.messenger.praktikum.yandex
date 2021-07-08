import Templator from '~/templator';
import Avatar from '~/src/components/Avatar';

import { companions } from './mocks';

import Search from './components/Search';
import Companion from './components/Companion';
import Chat from './modules/Chat';

import template from './index.tpl';

const component = {
  name: 'ChatPage',
  template,
  components: {
    Companion,
    Avatar,
    Search,
    Chat,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    companions,
    selectedChat: 1,
  };
  return new Templator(component).compile(context);
};

export default Page;