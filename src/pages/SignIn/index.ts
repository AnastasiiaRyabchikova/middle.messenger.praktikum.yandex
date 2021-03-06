import { WithRouter } from 'router';
import { connect } from '@/store';
import Page404 from '@/pages/Page404';
import { SignUpUserData } from '@/api/user-interfaces';
import { AuthControler } from '@/controlers';
import pathnames from '@/constants/pathnames';
import { PropsType } from '@/types/component';
// eslint-disable-next-line
import { routesForUser } from '@/routes';
import RouterLink from '@/components/RouterLink';
import Logo from '@/components/Logo';
import UIInput from '@/components/UIInput';
import Button from '@/components/Button';
import template from './index.tpl';
import styles from './styles.module.css';
import Form from './components/Form';

class SignInPage extends WithRouter {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: async (params: SignUpUserData) => {
        await AuthControler.signUp(params);
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

export default connect(
  // eslint-disable-next-line
  (state) => ({ user: state.user.profile }),
  SignInPage,
);
