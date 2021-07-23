import { Component } from '~/src/types/component';
import Templator from 'templator';

import Logo from '~/src/components/Logo';

import template from './index.tpl';

type Props = {
  code: number,
  [key: string]: any,
};

const messages = {
  404: 'Страница не найдена',
  500: 'Ошибка сервера',
};

const component: Component = {
  name: 'UserFormPage',
  template,
  components: {
    Logo,
  },
};

const Page = (props: Props) => {
  const context = {
    code: props.code,
    message: messages[props.code],
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
