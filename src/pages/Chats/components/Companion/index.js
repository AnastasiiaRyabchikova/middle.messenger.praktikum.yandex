import Templator from '~/templator';

import Avatar from './Avatar';
import template from './index.tpl';

const component = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page = (props) => {
  const context = {
    src: props.src,
    name: props.name,
    surname: props.surname,
    unreadMessagesCount: props.unreadMessagesCount,
    message: props.message,
    date: props.date,
  };
  console.log(props);
  return new Templator(component).compile(context);
};

export default Page;
