import Templator from '~/src/templator';

import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';

import template from './index.tpl';

const component = {
  name: 'ChatPageHeader',
  template,
  components: {
    Avatar,
    IconEllipsisVAlt,
  }
};


const Page = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
