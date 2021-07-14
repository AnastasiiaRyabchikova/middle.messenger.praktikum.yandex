import Templator from '~/src/templator';

import cx from '~/src/utils/classnames';
import ChatHistory from '~/src/modules/ChatHistory';

import MessageTextarea from '../MessageTextarea';
import Header from '../Header';


import template from './index.tpl';
import { messages } from './mocks.js';
import * as styles from './styles.module.css';

const component = {
  name: 'ChatPage',
  template,
  components: {
    Header,
    ChatHistory,
    MessageTextarea,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    messages,
    class: cx([styles.chat, props.class]),
  };
  return new Templator(component).compile(context);
};

export default Page;
