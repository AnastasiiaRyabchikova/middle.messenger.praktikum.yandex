import { Component, Props } from '~/src/types/component';
import Templator from 'templator';

import Avatar from '~/src/components/Avatar';
import template from './index.tpl';

const component: Component = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page = (props: Props = {}) => {
  const context = {
    src: props.src,
    name: props.name,
    surname: props.surname,
    unreadMessagesCount: props.unreadMessagesCount,
    message: props.message,
    date: props.date,
  };
  return new Templator(component).compile(context);
};

export default Page;
