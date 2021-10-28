import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import UIInput from '@/components/UIInput';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      class: context.class,
    };

    super({
      props,
      name: 'SearchCompanion',
      template,
      components: {
        UIInput,
      },
      containerTemplate: '<span />',
    });
  }
};
