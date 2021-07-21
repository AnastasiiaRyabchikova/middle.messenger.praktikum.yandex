import Templator from 'templator';

import { IconArrow } from '~src/icons';

import template from './index.tpl';

const component = {
  name: 'MessageTextarea',
  template,
  components: {
    IconArrow,
  }
};


const Page = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
