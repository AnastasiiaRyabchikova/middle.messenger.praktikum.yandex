import Templator from '~/src/templator';
import cx from '~/src/utils/classnames';

import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page = (props) => {
  const context = {
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
  return new Templator(component).compile(context);
};

export default Page;
