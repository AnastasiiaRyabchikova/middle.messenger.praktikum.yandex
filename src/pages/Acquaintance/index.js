import Templator from '~/templator';

import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';

import template from './index.tpl';

const inputs = [
  {
    id: 'mail',
    name: 'mail',
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
    id: 'name',
    name: 'name',
    label: 'Имя',
    placeholder: 'Ваше имя',
  },
  {
    id: 'surname',
    name: 'surname',
    label: 'Фамилия',
    placeholder: 'Ваша фамилия',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
  },
  {
    id: 'password-repeat',
    name: 'password-repeat',
    label: 'Повторите пароль',
    placeholder: 'Пароль',
  },
];

const component = {
  name: 'AuthorizationPage',
  template,
  components: {
    Logo,
    UIInput,
    Button,
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
