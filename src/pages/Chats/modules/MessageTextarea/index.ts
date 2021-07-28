import Templator from 'templator';

import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';

import { IconArrow } from '~/src/icons';

import template from './index.tpl';

const component: ComponentType = {
  name: 'MessageTextarea',
  template,
  components: {
    IconArrow,
  }
};


const Page: Function = (props: PropsType = {}): compiledComponentType => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
