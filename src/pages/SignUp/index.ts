import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'SignUpPage',
      template,
      components: {
        Logo,
        UIInput,
        Button,
      },
      containerTemplate: `<span />`,
    });
  }
};

