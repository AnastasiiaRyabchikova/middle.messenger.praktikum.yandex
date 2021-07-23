import { Component, Props, compiledComponent } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';

import Avatar from '~/src/components/Avatar';

import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'AddAvatarUserForm',
  template,
  components: {
    Avatar,
  },
};

const Page: Function = (props: Props = {}): compiledComponent => {
  const context = {
    ...props,
    class: cx([
      styles.wrapper,
      props.class,
    ]),
  };
  return new Templator(component).compile(context);
};

export default Page;
