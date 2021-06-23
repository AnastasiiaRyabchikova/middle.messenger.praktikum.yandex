import Templator from '~/templator';

import Logo from '../../components/Logo';

import template from './index.tpl';

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Logo,
  },
};

const Page = (ctx) => {
  return new Templator(component).compile(ctx);
};

export default Page;
