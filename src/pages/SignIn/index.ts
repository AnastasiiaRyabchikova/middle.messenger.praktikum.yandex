import * as Ryabact from '~/src/modules/Ryabact';
import pathnames from '~/src/constants/pathnames';
import { PropsType } from '~/src/types/component';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import template from './index.tpl';
import * as styles from './styles.module.css';
import Form from './components/Form';

export default class Component extends Ryabact.ComponentWithRouter {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
        console.log(params);
        this.router.go(pathnames.chats);
      },
    };

    super({
      props,
      name: 'SignInPage',
      template,
      components: {
        Logo,
        UIInput,
        Button,
        Form,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
