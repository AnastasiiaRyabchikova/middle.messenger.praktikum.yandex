import template from './index.tpl';
import Templator from '~/templator';

const Page = (ctx) => {
  return new Templator(template).compile();
};

export default Page;
