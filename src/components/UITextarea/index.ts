import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { PropsType } from '~/src/types/component';
import Textarea from '~/src/components/Textarea';
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
      class: cx([
        context.class,
        { [styles.solid]: context.appearance === 'solid' },
        { [styles.error]: Boolean(context.error) },
        { [styles.success]: !Boolean(context.error) && Boolean(context.value) },
      ]),
      value: context.value,
      required: context.required,
      handleTextareaFocus: context.evFocus,
      handleTextareaBlur: context.evBlur,
      handleTextareaInput: context.evInput,
    };

    super({
      props,
      name: 'UITextarea',
      template,
      components: {
        Textarea,
      },
      containerTemplate: `<div />`,
    });
  }
};
