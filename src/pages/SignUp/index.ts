import Templator from 'templator';

import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';

import template from './index.tpl';

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
  },
};

const Page = (ctx) => (
  new Templator(component).compile(ctx)
);

export default Page;
