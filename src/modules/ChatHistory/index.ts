import { Component, Props, compiledComponent } from '~/src/types/component';
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

const Page: Function = (props: Props = {}): compiledComponent => {
  const context = {
    messages: props.messages,
  };
  return new Templator(component).compile(context);
};

export default Page;
