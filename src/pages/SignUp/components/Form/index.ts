import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import UIInput from '~/src/components/UIInput';
import Button from '~/src/components/Button';
import template from './index.tpl';

const inputs = [
  {
    id: 'login',
    name: 'login',
    type: 'text',
    label: 'Логин',
    placeholder: 'Ваша логин',
    required: true,
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    label: 'Пароль',
    placeholder: 'Пароль',
    required: true,
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

