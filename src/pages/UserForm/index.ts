import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import { PropsType } from '~/src/types/component';
import { IconArrowLeft } from '~/src/icons';
import Logo from '~/src/components/Logo';
import ButtonBack from '~/src/components/ButtonBack';
import UserControler from '~/src/controlers/user-controler';
import Form from './components/Form';
import LogoutButton from './components/LogoutButton';
import template from './index.tpl';
import * as styles from './styles.module.css';

class UserFormPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: Record<string, unknown>) => {
        UserControler.edit(params);
      },
      handleBackClick: () => {
        this.router.back();
      },
    };

    super({
      props,
      name: 'UserFormPage',
      template,
      components: {
        Logo,
        IconArrowLeft,
        Form,
        LogoutButton,
        ButtonBack,
      },
      containerTemplate: `<div class="${styles.container}"/>`,
    });
  }
};

export default withRouter(UserFormPage);
