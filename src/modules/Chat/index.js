import Templator from '~/templator';

import Message from './components/Message';

import template from './index.tpl';

const component = {
  name: 'ChatModule',
  template,
  components: {
    Message,
  },
};

const Page = (props) => {
  const context = {
    messages: props.messages,
  };
  return new Templator(component).compile(context);
};

export default Page;
