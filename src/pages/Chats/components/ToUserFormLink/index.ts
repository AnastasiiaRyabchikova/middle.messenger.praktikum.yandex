import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import { PropsType } from '@/types/component';
import Avatar from '@/components/Avatar';
import template from './index.tpl';

class ToUserFormLink extends Ryabact.Component {
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

export default withRouter(ToUserFormLink);
