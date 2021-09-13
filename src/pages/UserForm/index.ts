import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import { IconArrowLeft } from '~/src/icons';
import Logo from '~/src/components/Logo';
import Form from './components/Form';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: Record<string, unknown>) => {
        console.log(params);
      },
    };

    super({
      props,
      name: 'UserFormPage',
      template,
      components: {
        Logo,
        IconArrowLeft,
        Form,
      },
      containerTemplate: `<div class="${styles.container}"/>`,
    });
  }
};
