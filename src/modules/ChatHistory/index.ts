import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Message from './components/Message';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      messages: context.messages,
    };

    super({
      props,
      name: 'ChatHistoryModule',
      template,
      components: {
        Message,
      },
      containerTemplate: '<span />',
    });
  }
};
