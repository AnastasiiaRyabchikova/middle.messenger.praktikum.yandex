import { Component, Props } from '~/src/types/component';
import Templator from 'templator';
import cx from 'classnames';
import template from './index.tpl';
import * as styles from './styles.module.css';

const component: Component = {
  name: 'UIInput',
  template,
};

const UIInput = (props: Props = {}) => {
  const ctx = {
    label: props.label,
    type: props.type || 'text',
    placeholder: props.placeholder,
    name: props.name,
    error: props.error,
    shouldShowError: Boolean(props.error),
    inputClass: cx([
      styles.input,
      { [styles.error]: props.error },
    ]),
    class: cx([
      styles.wrapper,
      props.class,
      { [styles.solid]: props.appearance === 'solid' },
    ]),
    value: props.value,
  };
  return new Templator(component).compile(ctx);
};

export default UIInput;
