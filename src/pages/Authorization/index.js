import Templator from '~/templator';

import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';

import template from './index.tpl';

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Logo,
    UIInput,
  },
};

const Page = (ctx) => {
  return new Templator(component).compile(ctx);
};

export default Page;
