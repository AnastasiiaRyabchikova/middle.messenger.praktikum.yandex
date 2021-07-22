import { Component } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'Button',
  template,
};

const Button = (ctx) => {
  const props = {
    class: cx([styles.button, ctx.class]),
    type: ctx.type || 'button',
    label: ctx.label,
  };

  return new Templator(component).compile(props);
};

export default Button;
