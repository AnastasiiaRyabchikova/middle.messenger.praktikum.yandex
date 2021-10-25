import * as Ryabact from '~/src/modules/Ryabact';
import authControler from '~/src/controlers/auth-controler';
import { PropsType } from '~/src/types/component';
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
