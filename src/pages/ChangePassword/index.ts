import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';

import { IconArrowLeft } from '~/src/icons';

import Logo from '~/src/components/Logo';
import Form from './components/Form';

import template from './index.tpl';
import * as styles from './styles.module.css';

const inputs = [
  {
    id: 'oldPassword',
    name: 'oldPassword',
    label: 'Старый пароль',
    placeholder: 'password',
  },
  {
    id: 'newPassword',
    name: 'newPassword',
    label: 'Новый пароль',
    placeholder: 'password',
  },
  {
    id: 'newPasswordRepeat',
    name: '',
    label: 'Повторите пароль',
    placeholder: 'password',
  },
];

const formName = 'changePassword';
export default class Page extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      inputs,
      formName,
      handleFormSubmit: (params: object) => {
        console.log(params);
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
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
