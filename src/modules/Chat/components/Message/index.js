import Templator from '~/templator';
import cx from '~/src/utils/classnames';

import Avatar from '~/src/components/Avatar';
import template from './index.tpl';
import styles from './styles.module.css';

const component = {
  name: 'ChatCompanion',
  template,
  components: {
    Avatar,
  },
};

const Page = (props) => {
  const context = {
    className: cx([
      styles.message,
      props.className,
      { [styles.isMine]: props.isMine },
    ]),
    src: props.src,
    text: props.text,
    isMine: props.isMine,
  };
  return new Templator(component).compile(context);
};

export default Page;
