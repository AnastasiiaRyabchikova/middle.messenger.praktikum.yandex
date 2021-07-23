import { Component, Props, compiledComponent } from '~/src/types/component';
import Templator from 'templator';

import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';

import template from './index.tpl';

const component: Component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
  },
};

const Page: Function = (props: Props = {}): compiledComponent => {
  const ctx = {
    ...props,
  };
  return new Templator(component).compile(ctx);
};

export default Page;
