import { WithRouter } from 'router';
import { SignInUserData } from '@/api/user-interfaces';
import pathnames from '@/constants/pathnames';
import { PropsType } from '@/types/component';
import Page404 from '@/pages/Page404';
import RouterLink from '@/components/RouterLink';
import { AuthControler } from '@/controlers';
// eslint-disable-next-line
import { routesForUser } from '@/routes';
import Logo from '@/components/Logo';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import Form from './components/Form';
import template from './index.tpl';
import styles from './styles.module.css';
import { connect } from '@/store';

class SignUpPage extends WithRouter {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: async (params: SignInUserData) => {
        await AuthControler.signIn(params);
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

export default connect(
  // eslint-disable-next-line
  (state) => ({ user: state.user.profile }),
  SignUpPage,
);
