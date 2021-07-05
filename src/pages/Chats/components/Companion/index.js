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
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
