import Templator from '~/templator';

import { IconArrowLeft } from '~/src/icons';

import Logo from '~/src/components/Logo';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import Avatar from '~/src/components/Avatar';

import PasswordChanging from './modules/PasswordChanging';

import template from './index.tpl';

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
  name: 'UserFormPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
    Avatar,
    PasswordChanging,
    IconArrowLeft,
  },
};

const Page = (props) => {
  const context = {
    ...props,
    inputs,
  };
  return new Templator(component).compile(context);
};

export default Page;
