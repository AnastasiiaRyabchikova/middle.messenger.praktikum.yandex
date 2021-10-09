import { withRouter } from 'router';
import { connect } from '~/src/store';
import { AuthControler } from '~/src/controlers';
import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '../../components/Logo';
import { routesForUnknownUser, routesForUser } from '~/src/routes';
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
        .start();
    } else {
      this.router
        .use(routesForUser)
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
