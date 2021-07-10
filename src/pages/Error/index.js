import Templator from '~/templator';

import Logo from '~/src/components/Logo';

import template from './index.tpl';

const messages = {
  404: 'Страница не найдена'
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
    code: 404,
    message: messages[404],
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
