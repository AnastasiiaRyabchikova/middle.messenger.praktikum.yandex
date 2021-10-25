import { withRouter } from 'router';
import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import { IconArrowLeft } from '~/src/icons';
import Logo from '~/src/components/Logo';
import ButtonBack from '~/src/components/ButtonBack';
import UserControler from '~/src/controlers/user-controler';
import { EditUserData } from '~/src/api/user-interfaces';
import Form from './components/Form';
import LogoutButton from './components/LogoutButton';
import AddAvatar from './components/AddAvatar';
import template from './index.tpl';
import * as styles from './styles.module.css';

class UserFormPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: EditUserData) => (
        UserControler.edit(params)
      ),
      handleBackClick: () => {
        this.router.back();
      },
      handleAddAvatarSubmit: (params: FormData) => (
        UserControler.editAvatar(params)
      ),
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
        AddAvatar,
      },
      containerTemplate: `<div class="${styles.container}"/>`,
    });
  }
};

export default withRouter(UserFormPage);
