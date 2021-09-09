import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import cx from 'classnames';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      label: context.label,
      type: context.type || 'text',
      placeholder: context.placeholder,
      name: context.name,
      error: context.error,
      shouldShowError: Boolean(context.error),
      inputClass: cx([
        styles.input,
        { [styles.error]: Boolean(context.error) },
      ]),
      class: cx([
        styles.wrapper,
        context.class,
        { [styles.solid]: context.appearance === 'solid' },
      ]),
      value: context.value,
      required: context.required,
    };

    super({
      props,
      name: 'UIInput',
      template,
      containerTemplate: `<span />`,
    });
  }
};
