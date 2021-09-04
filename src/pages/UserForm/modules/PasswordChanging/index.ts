import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
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

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      inputs,
      class: cx([
        styles.wrapper,
        context.class,
      ]),
    };

    super({
      props,
      name: 'PasswordChangingPage',
      template,
      components: {
        UIInput,
      },
      containerTemplate: `<span />`,
    });
  }
};

