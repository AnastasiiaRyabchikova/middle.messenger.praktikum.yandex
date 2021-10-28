import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'ChatPageHeaderRemoveUserButton',
      template,
      components: {},
      containerTemplate: '<span />',
    });
  }
};
