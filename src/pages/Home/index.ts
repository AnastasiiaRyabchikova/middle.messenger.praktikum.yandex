import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import { connect } from '@/store';
import { AuthControler } from '@/controlers';
import { PropsType } from '@/types/component';
import Page404 from '@/pages/Page404';
import Logo from '../../components/Logo';
import { routesForUnknownUser, routesForUser } from '@/routes';
import template from './index.tpl';
import * as styles from './styles.module.css';

class HomePage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'HomePage',
      template,
      components: {
        Logo,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }

  async componentDidMount() {
    await AuthControler.fetchUser();
    if (!this.props.user) {
      this.router
        .use(routesForUnknownUser)
        .setFallbackPage(Page404)
        .start();
    } else {
      this.router
        .use(routesForUser)
        .setFallbackPage(Page404)
        .start();
    }
  }
};

export default withRouter(
  connect(
    state => ({ user: state.user.profile }),
    HomePage,
  ),
);
