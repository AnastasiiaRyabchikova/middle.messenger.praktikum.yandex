import { Component, Props } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';

import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'Avatar',
  template,
};

const Avatar = (props: Props = {}) => {
  const ctx = {
    ...props,
    class: cx([styles.avatar, props.class]),
  };
  return new Templator(component).compile(ctx);
};

export default Avatar;
