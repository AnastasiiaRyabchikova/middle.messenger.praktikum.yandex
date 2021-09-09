import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    console.log(context.class);
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
      containerTemplate: `<span />`,
    });
  }
};
