import { withRouter } from 'router';
import { connect } from '~/src/store';
import { AuthControler } from '~/src/controlers';
import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '../../components/Logo';
import template from './index.tpl';
import * as styles from './styles.module.css';
import user from '~/src/store/user';

console.log(111111);

class HomePage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    console.log('HomePage');

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

  componentDidMount() {
    // AuthControler.fetchUser();
  }
};

export default withRouter(
  // HomePage,
  connect(
    state => ({ user: state.user.profile }),
    HomePage,
  ),
);
