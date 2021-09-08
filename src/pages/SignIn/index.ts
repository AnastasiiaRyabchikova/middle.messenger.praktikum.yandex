import { PropsType } from '~/src/types/component';
import * as Ryabact from 'ryabact';
import Logo from '../../components/Logo';
import UIInput from '../../components/UIInput';
import Button from '../../components/Button';
import template from './index.tpl';
import * as styles from './styles.module.css';
import Form from './components/Form';

const formName = 'registration';

export default class Component extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      formName,
      handleFormSubmit: (e: Event) => {
        e.preventDefault();

        const form = document.forms.namedItem(formName) || undefined;
        const formData = new FormData(form);
        const params = [...formData].reduce((acc: object, cur: [string, any]): object => {
          const [key, value]: [string, any] = cur;
          acc[key] = value;
          return acc;
        }, {});
        console.log(params);
      },
    };

    super({
      props,
      name: 'SignInPage',
      template,
      components: {
        Logo,
        UIInput,
        Button,
        Form,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};

