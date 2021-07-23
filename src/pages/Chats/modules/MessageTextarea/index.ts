import Templator from 'templator';

import { Component, Props } from '~/src/types/component';

import { IconArrow } from '~/src/icons';

import template from './index.tpl';

const component: Component = {
  name: 'MessageTextarea',
  template,
  components: {
    IconArrow,
  }
};


const Page = (props: Props = {}) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
