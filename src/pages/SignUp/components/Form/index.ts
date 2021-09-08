import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import template from './index.tpl';

const inputs = [
  {
    id: 'login',
    name: 'login',
    label: 'Логин',
    placeholder: 'Ваша логин',
  },
  {
    id: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
  },
];

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      inputs,
      name: context.name,
      events: context.events,
    };

    super({
      props,
      name: 'SignUpPageForm',
      template,
      components: {
        UIInput,
        Button,
      },
      containerTemplate: `<div />`,
    });
  }
};

