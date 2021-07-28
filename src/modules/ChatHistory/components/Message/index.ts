import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';

import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component: ComponentType = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page: Function = (props: PropsType = {}): compiledComponentType => {
  const ctx = {
    class: cx([
      styles.message,
      props.class,
      { [styles.isMine]: Boolean(props.isMine) },
    ]),
    src: props.src,
    text: props.text,
    isMine: props.isMine,
    time: props.time,
  };
  return new Templator(component).compile(ctx);
};

export default Page;
