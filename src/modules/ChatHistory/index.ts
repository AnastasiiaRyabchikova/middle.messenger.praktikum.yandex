import { Component, Props } from '~/src/types/component';
import Templator from 'templator';

import Message from './components/Message';

import template from './index.tpl';

const component: Component = {
  name: 'ChatHistoryModule',
  template,
  components: {
    Message,
  },
};

const Page = (props: Props = {}) => {
  const context = {
    messages: props.messages,
  };
  return new Templator(component).compile(context);
};

export default Page;
