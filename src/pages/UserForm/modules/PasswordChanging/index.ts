import Templator from 'templator';
import cx from 'classnames';

import UIInput from '~/src/components/UIInput';

import template from './index.tpl';
import * as styles from './styles.module.css';

const inputs = [
  {
    id: 'name',
    name: 'name',
    label: 'Имя',
    placeholder: 'Ваше имя',
    value: 'Глаша',
  },
  {
    id: 'mail',
    name: 'mail',
    label: 'Почта',
    placeholder: 'Ваша почта',
    value: 'Птичьева',
  },
  {
    id: 'login',
    name: 'login',
    label: 'Логин',
    placeholder: 'Ваша логин',
    value: 'tyetya_glasha',
  },
  {
    id: 'about',
    name: 'about',
    label: 'О себе',
    placeholder: 'Радость ваша',
    value: 'Радость ваша',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Номер телефона',
    placeholder: '+7(___) ___-__-__',
    value: '+7(985) 126-11-22',
  },
];

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    UIInput,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    inputs,
    class: cx([
      styles.wrapper,
      props.class,
    ]),
  };
  return new Templator(component).compile(context);
};

export default Page;
