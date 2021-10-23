import * as Ryabact from '~/src/modules/Ryabact';
import { withRouter } from 'router';
import pathnames from '~/src/constants/pathnames';
import { PropsType } from '~/src/types/component';
import Page404 from '~/src/pages/Page404';
import RouterLink from '~/src/components/RouterLink';
import { AuthControler } from '~/src/controlers';
import { routesForUser } from '~/src/routes';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import Form from './components/Form';
import template from './index.tpl';
import * as styles from './styles.module.css';
import { connect } from '~/src/store';

class SignUpPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: async (params: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
        await AuthControler.signIn(params);
        console.log();
        if (this.props.user) {
          this.router
            .use(routesForUser)
            .setFallbackPage(Page404)
            .start();
          this.router.go(pathnames.chats);
        }
      },
    };

    super({
      props,
      name: 'SignUpPage',
      template,
      components: {
        RouterLink,
        Logo,
        UIInput,
        Button,
        Form,
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
    SignUpPage,
  ),
);
