import { withRouter } from 'router';
import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import { IconArrowLeft } from '@/icons';
import Logo from '@/components/Logo';
import ButtonBack from '@/components/ButtonBack';
import UserControler from '@/controlers/user-controler';
import { EditUserData } from '@/api/user-interfaces';
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
