import Templator from 'templator';

import Logo from '~/src/components/Logo';

import template from './index.tpl';

const messages = {
  404: 'Страница не найдена',
  500: 'Ошибка сервера',
};

const component = {
  name: 'UserFormPage',
  template,
  components: {
    Logo,
  },
};

const Page = (props) => {
  const context = {
    code: props.code,
    message: messages[props.code],
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
