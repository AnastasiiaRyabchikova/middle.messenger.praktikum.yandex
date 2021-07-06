import Templator from '~/templator';
import Avatar from '~/src/components/Avatar';

import { companions } from './mocks';

import Search from './components/Search';
import Companion from './components/Companion';

import template from './index.tpl';

const component = {
  name: 'ChatPage',
  template,
  components: {
    Companion,
    Avatar,
    Search,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    companions,
  };
  return new Templator(component).compile(context);
};

export default Page;
