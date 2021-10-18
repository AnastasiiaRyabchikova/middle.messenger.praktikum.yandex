import * as Ryabact from 'ryabact';
import { withRouter } from 'router';
import UserControler from '~/src/controlers/user-controler';
import { EditPasswordData } from '~/src/api/user-api';
import { PropsType } from '~/src/types/component';

import { IconArrowLeft } from '~/src/icons';

import Logo from '~/src/components/Logo';
import ButtonBack from '~/src/components/ButtonBack';
import Form from './components/Form';

import template from './index.tpl';
import * as styles from './styles.module.css';

class ChangePasswordPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: EditPasswordData) => (
        UserControler.editPassword(params)
      ),
      handleBackClick: () => {
        this.router.back();
      },
    };

    super({
      props,
      name: 'ChangePasswordPage',
      template,
      components: {
        Logo,
        Form,
        IconArrowLeft,
        ButtonBack,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};

export default withRouter(ChangePasswordPage);
