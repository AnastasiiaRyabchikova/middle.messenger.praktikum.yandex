import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import { IconEllipsisVAlt } from '~/src/icons';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'ChatPageHeaderModule',
      template,
      components: {
        Avatar,
        IconEllipsisVAlt,
      },
      containerTemplate: '<div />',
    });
  }
};
