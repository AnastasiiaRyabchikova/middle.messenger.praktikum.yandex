import Templator from '~/templator';

import Chat from '~/src/modules/Chat';

import template from './index.tpl';

const component = {
  name: 'ChatPage',
  template,
  components: {
    Chat,
  },
};

const Page = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
