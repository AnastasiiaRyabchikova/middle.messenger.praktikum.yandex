import Templator from '~/templator';


import template from './index.tpl';

const component = {
  name: 'ChatCompanion',
  template,
};

const Page = (props) => {
  const context = {
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Page;
