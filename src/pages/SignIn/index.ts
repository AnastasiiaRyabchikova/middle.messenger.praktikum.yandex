import { withRouter } from 'router';
import * as Ryabact from '~/src/modules/Ryabact';
import { connect } from '~/src/store';
import { SignupData } from '~/src/api/auth-api';
import { AuthControler } from '~/src/controlers';
import pathnames from '~/src/constants/pathnames';
import { PropsType } from '~/src/types/component';
import { routesForUser } from '~/src/routes';
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
      handleFormSubmit: async (params: SignupData) => {
        // eslint-disable-next-line no-console
        await AuthControler.signUp(params);
        if (this.props.user) {
          this.router.use(routesForUser).start();
          this.router.go(pathnames.chats);
        }
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

  componentDidUpdate() {
    return false;
  }
};

export default withRouter(
  connect(
    (state) => ({ user: state.user.profile }),
    withRouter(SignInPage)
  ),
);
