import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';
import Templator from 'templator';

import UIInput from '~/src/components/UIInput';
import template from './index.tpl';

const component: ComponentType = {
  name: 'SearchCompanion',
  template,
  components: {
    UIInput,
  },
};

const Search: Function = (props: PropsType = {}): compiledComponentType => {
  const context = {
    class: props.class,
    ...props,
  };
  return new Templator(component).compile(context);
};

export default Search;
