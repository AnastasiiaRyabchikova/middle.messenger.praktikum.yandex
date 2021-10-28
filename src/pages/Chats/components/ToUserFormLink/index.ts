import { WithRouter } from 'router';
import { PropsType } from '@/types/component';
import Avatar from '@/components/Avatar';
import template from './index.tpl';

class ToUserFormLink extends WithRouter {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      class: context.class,
      events: {
        click: context.evClick,
      },
    };

    super({
      props,
      name: 'ToUserFormLink',
      template,
      components: {
        Avatar,
      },
      containerTemplate: '<span />',
    });
  }
};

export default ToUserFormLink;
