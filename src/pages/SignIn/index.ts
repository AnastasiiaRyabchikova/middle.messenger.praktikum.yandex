import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';

import template from './index.tpl';

const inputs = [
  {
    id: 'email',
    name: 'email',
    label: 'Почта',
    placeholder: 'Ваша почта',
  },
  {
    id: 'login',
    name: 'login',
    label: 'Логин',
    placeholder: 'Ваша логин',
  },
  {
    id: 'first_name',
    name: 'first_name',
    label: 'Имя',
    placeholder: 'Ваше имя',
  },
  {
    id: 'second_name',
    name: 'second_name',
    label: 'Фамилия',
    placeholder: 'Ваша фамилия',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Номер телефона',
    placeholder: '+7(985)126-42-45',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
  },
  {
    id: 'password-repeat',
    name: '',
    label: 'Повторите пароль',
    placeholder: 'Пароль',
  },
];

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      inputs,
    };

    super({
      props,
      name: 'SignInPage',
      template,
      components: {
        Logo,
        UIInput,
        Button,
      },
      containerTemplate: `<div />`,
    });
  }
};

