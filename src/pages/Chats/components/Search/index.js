import Templator from '~/templator';

import UIInput from '~/src/components/UIInput';
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
    className: props.className,
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Search;
