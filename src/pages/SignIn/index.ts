import { withRouter } from 'router';
import * as Ryabact from '~/src/modules/Ryabact';
import pathnames from '~/src/constants/pathnames';
import { PropsType } from '~/src/types/component';
import RouterLink from '~/src/components/RouterLink';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import template from './index.tpl';
import * as styles from './styles.module.css';
import Form from './components/Form';

class SignInPage extends Ryabact.Component {
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
        RouterLink,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};

export default withRouter(SignInPage);