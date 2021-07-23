import { Component, Props } from '~/src/types/component';
import Templator from 'templator';

import { IconArrowLeft } from '~/src/icons';

import Logo from '~/src/components/Logo';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import Avatar from '~/src/components/Avatar';

import template from './index.tpl';

const inputs = [
  {
    id: 'oldPassword',
    name: 'oldPassword',
    label: 'Старый пароль',
    placeholder: 'password',
  },
  {
    id: 'newPassword',
    name: 'newPassword',
    label: 'Новый пароль',
    placeholder: 'password',
  },
  {
    id: 'newPasswordRepeat',
    name: '',
    label: 'Повторите пароль',
    placeholder: 'password',
  },
];

const component: Component = {
  name: 'UserFormPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
    Avatar,
    IconArrowLeft,
  },
};

const Page = (props: Props = {}) => {
  const context = {
    ...props,
    inputs,
  };
  return new Templator(component).compile(context);
};

export default Page;
