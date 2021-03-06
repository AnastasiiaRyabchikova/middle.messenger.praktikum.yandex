import { WithRouter } from 'router';
import UserControler from '@/controlers/user-controler';
import { EditPasswordData } from '@/api/user-interfaces';
import { PropsType } from '@/types/component';
import { IconArrowLeft } from '@/icons';
import Logo from '@/components/Logo';
import ButtonBack from '@/components/ButtonBack';
import Form from './components/Form';

import template from './index.tpl';
import styles from './styles.module.css';

class ChangePasswordPage extends WithRouter {
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

export default ChangePasswordPage;
