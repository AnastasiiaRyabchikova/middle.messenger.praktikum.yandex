import Templator from 'templator';

import { IconArrowLeft } from '@/icons';

import Logo from '@/components/Logo';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';

import AddAvatar from './modules/AddAvatar';
import PasswordChanging from './modules/PasswordChanging';

import template from './index.tpl';

const inputs = [
  {
    id: 'email',
    name: 'email',
    label: 'Почта',
    placeholder: 'Ваша почта',
    value: 'test@test.ru',
  },
  {
    id: 'login',
    name: 'login',
    label: 'Логин',
    placeholder: 'Ваша логин',
    value: 'tetya_glasha',
  },
  {
    id: 'first_name',
    name: 'first_name',
    label: 'Имя',
    placeholder: 'Ваше имя',
    value: 'Глаша',
  },
  {
    id: 'second_name',
    name: 'second_name',
    label: 'Фамилия',
    placeholder: 'Ваша фамилия',
    value: 'Тетя',
  },
  {
    id: 'display_name',
    name: 'display_name',
    label: 'Ник',
    placeholder: 'Ваш ник',
    value: 'Радость ваша',
  },
  {
    id: 'phone',
    name: 'phone',
    label: 'Номер телефона',
    placeholder: '+7(___)___-___-__',
    value: '+7(985)126-42-45',
  },
];

const component = {
  name: 'UserFormPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
    AddAvatar,
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
