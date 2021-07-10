import Templator from '~/templator';
import cx from '~/src/utils/classnames';

import Avatar from '~/src/components/Avatar';

import template from './index.tpl';
import styles from './styles.module.css';

const component = {
  name: 'AddAvatarUserForm',
  template,
  components: {
    Avatar,
  },
};

const Page = (props) => {
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
