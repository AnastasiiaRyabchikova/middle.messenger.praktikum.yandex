import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import Form from './components/Form';
import template from './index.tpl';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: object) => {
        console.log(params);
      },
    };

    super({
      props,
      name: 'SignUpPage',
      template,
      components: {
        Logo,
        UIInput,
        Button,
        Form,
      },
      containerTemplate: '<span />',
    });
  }
};
