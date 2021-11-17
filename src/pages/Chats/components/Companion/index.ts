import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import Avatar from '@/components/Avatar';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      id: context.id,
      src: context.src,
      initials: (context.name as string)[0],
      name: context.name,
      surname: context.surname,
      unreadMessagesCount: context.unreadMessagesCount,
      message: context.message,
      date: context.date,
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
