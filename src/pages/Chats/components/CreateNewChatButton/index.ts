import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'ChatCompanion',
      template,
      components: {},
      containerTemplate: '<span />',
    });
  }
};
