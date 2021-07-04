import Templator from '~/templator';


import { companions } from './mocks';

import Companion from './components/Companion';

import template from './index.tpl';

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Companion,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    companions,
  };
  return new Templator(component).compile(context);
};

export default Page;
