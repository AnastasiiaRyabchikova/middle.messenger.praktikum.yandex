import { WithRouter } from 'router';
import cx from 'classnames';
import { PropsType } from '@/types/component';
import template from './index.tpl';

class RouterLink extends WithRouter {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      class: cx([context.class]),
      text: context.text,
      to: context.to,
      events: {
        ...context.events,
        click: (e: Event) => {
          e.preventDefault();
          const { to = '' } = (e.target as HTMLLinkElement).dataset;
          this.router.go(to);
        },
      },
    };

    super({
      props,
      name: 'RouterLink',
      template,
      containerTemplate: '<span />',
    });
  }
};

export default RouterLink;
