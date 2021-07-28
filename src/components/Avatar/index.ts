import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';

import template from './index.tpl';
import * as styles from './styles.module.css';

const component: ComponentType = {
  name: 'Avatar',
  template,
};

const Avatar: Function = (props: PropsType = {}): compiledComponentType => {
  const ctx = {
    ...props,
    class: cx([styles.avatar, props.class]),
  };
  return new Templator(component).compile(ctx);
};

export default Avatar;
