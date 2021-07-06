import Templator from '~/templator';

import template from './index.tpl';

const component = {
  name: 'Avatar',
  template,
};

const Avatar = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Avatar;
