import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';
import Templator from 'templator';

import Message from './components/Message';

import template from './index.tpl';

const component: ComponentType = {
  name: 'ChatHistoryModule',
  template,
  components: {
    Message,
  },
};

const Page: Function = (props: PropsType = {}): compiledComponentType => {
  const context = {
    messages: props.messages,
  };
  return new Templator(component).compile(context);
};

export default Page;
