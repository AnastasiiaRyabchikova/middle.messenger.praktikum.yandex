import { Component, Props } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';

import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page = (props: Props = {}) => {
  const ctx = {
    class: cx([
      styles.message,
      props.class,
      { [styles.isMine]: props.isMine },
    ]),
    src: props.src,
    text: props.text,
    isMine: props.isMine,
    time: props.time,
  };
  return new Templator(component).compile(ctx);
};

export default Page;
