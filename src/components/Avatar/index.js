import Templator from '~/templator';
import cx from '~/src/utils/classnames';

import template from './index.tpl';
import * as style from './styles.module.css';

const component = {
  name: 'Avatar',
  template,
};

const Avatar = (props) => {
  const context = {
    ...props,
    class: cx([styles.avatar, props.class]),
  };
  return new Templator(component).compile(context);
};

export default Avatar;
