import { Component } from '~/src/types/component';
import Templator from 'templator';

import Logo from '~/src/components/Logo';

import template from './index.tpl';

type Props = {
  code: number,
  [key: string]: any,
};

const messages: {
  [key: string]: string,
} = {
  404: 'Страница не найдена',
  500: 'Ошибка сервера',
};

type ctxType = {
  code: number,
  message: string,
};

const component: Component = {
  name: 'UserFormPage',
  template,
  components: {
    Logo,
  },
};

const Page = (props: Props) => {
  const { code } = props;
  const context: ctxType = {
    ...props,
    code,
    message: messages[code],
  };
  return new Templator(component).compile(context);
};

export default Page;
