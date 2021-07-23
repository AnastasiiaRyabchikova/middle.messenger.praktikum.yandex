import { Component, Props, compiledComponent } from '~/src/types/component';
import Templator from 'templator';

import cx from 'classnames';
import ChatHistory from '~/src/modules/ChatHistory';

import MessageTextarea from '../MessageTextarea';
import Header from '../Header';


import template from './index.tpl';
import { messages } from './mocks';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'ChatPage',
  template,
  components: {
    Header,
    ChatHistory,
    MessageTextarea,
  },
};

const Page: Function = (props: Props = {}): compiledComponent => {
  const context = {
    ...props,
    messages,
    class: cx([styles.chat, props.class]),
  };
  return new Templator(component).compile(context);
};

export default Page;
