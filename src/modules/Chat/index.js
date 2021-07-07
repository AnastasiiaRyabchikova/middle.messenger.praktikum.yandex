import Templator from '~/templator';

import template from './index.tpl';

const component = {
  name: 'ChatModule',
  template,
  components: {},
};

const Page = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
