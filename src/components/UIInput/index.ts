import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { PropsType } from '@/types/component';
import Input from '../Input';
import template from './index.tpl';
import styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      label: context.label,
      type: context.type || 'text',
      placeholder: context.placeholder,
      name: context.name,
      error: context.error,
      shouldShowError: Boolean(context.error),
      inputClass: cx([
        context.inputClass as string,
        styles.input,
      ]),
      class: cx([
        context.class,
        { [styles.solid]: context.appearance === 'solid' },
        { [styles.error]: Boolean(context.error) },
        { [styles.success]: !context.error && Boolean(context.value) },
      ]),
      value: context.value,
      required: context.required,
      handleInputFocus: context.evFocus,
      handleInputBlur: context.evBlur,
      handleInput: context.evInput,
    };

    super({
      props,
      name: 'UIInput',
      template,
      components: {
        Input,
      },
      containerTemplate: '<span />',
    });
  }
};
