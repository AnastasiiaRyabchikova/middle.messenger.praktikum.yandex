import Templator from 'templator';

import UIInput from '@/components/UIInput';
import template from './index.tpl';

const component = {
  name: 'SearchCompanion',
  template,
  components: {
    UIInput,
  },
};

const Search = (props) => {
  const context = {
    class: props.class,
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Search;
