import Templator from 'templator';

import { IconArrowLeft } from '@/icons';

import Logo from '@/components/Logo';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import Avatar from '@/components/Avatar';

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

const component = {
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

const Page = (props) => {
  const context = {
    ...props,
    inputs,
  };
  return new Templator(component).compile(context);
};

export default Page;
