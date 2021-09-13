import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      type: context.type || 'text',
      placeholder: context.placeholder,
      name: context.name,
      class: context.class,
      value: context.value,
      required: context.required,
      events: context.events,
    };

    super({
      props,
      name: 'Input',
      template,
      containerTemplate: '<span />',
    });
  }
};
