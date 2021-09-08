import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import Avatar from '~/src/components/Avatar';
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
export default class Page extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      inputs,
      name: context.name,
    };

    super({
      props,
      name: 'ChangePasswordPageForm',
      template,
      components: {
        UIInput,
        Button,
        Avatar,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
