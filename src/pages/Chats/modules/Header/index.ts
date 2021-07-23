import { Component, Props } from '~/src/types/component';
import Templator from 'templator';

import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';

import template from './index.tpl';

const component: Component = {
  name: 'ChatPageHeader',
  template,
  components: {
    Avatar,
    IconEllipsisVAlt,
  }
};


const Page = (props: Props = {}) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
