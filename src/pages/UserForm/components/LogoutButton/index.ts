import * as Ryabact from 'ryabact';
import authControler from '@/controlers/auth-controler';
import { PropsType } from '@/types/component';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      events: {
        click: async () => {
          await authControler.logout();
          window.location.href = '/';
        },
      },
    };

    super({
      props,
      name: 'LogoutButton',
      template,
      components: {},
      containerTemplate: '<span />',
    });
  }
};
