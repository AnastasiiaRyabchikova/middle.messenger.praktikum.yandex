import { Component, Props } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'Button',
  template,
};

const Button = (props: Props) => {
  const ctx = {
    class: cx([styles.button, props.class]),
    type: props.type || 'button',
    label: props.label,
  };

  return new Templator(component).compile(ctx);
};

export default Button;
