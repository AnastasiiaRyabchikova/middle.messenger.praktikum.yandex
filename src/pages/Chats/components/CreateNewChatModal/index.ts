import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
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
      components: {
        Avatar,
      },
      containerTemplate: '<div />',
    });
  }
};
