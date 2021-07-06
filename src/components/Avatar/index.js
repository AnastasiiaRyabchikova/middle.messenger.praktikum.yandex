import Templator from '~/templator';
import cx from '~/src/utils/classnames';

import template from './index.tpl';
import styles from './styles.module.css';

const component = {
  name: 'Avatar',
  template,
};

const Avatar = (props) => {
  const context = {
    ...props,
    className: cx([styles.avatar, props.className]),
  };
  return new Templator(component).compile(context);
};

export default Avatar;
