import { ComponentType, PropsType, compiledComponentType } from '~/src/types/component';
import Templator from 'templator';

import template from './index.tpl';

const component: ComponentType = {
  name: 'Logo',
  template,
};

const Logo: Function = (props: PropsType = {}): compiledComponentType => {
  const ctx = {
    ...props,
  };

  return new Templator(component).compile(ctx)
};

export default Logo;
