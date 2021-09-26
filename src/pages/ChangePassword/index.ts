import * as Ryabact from 'ryabact';
import Router from '~/src/Router';
import { PropsType } from '~/src/types/component';

import { IconArrowLeft } from '~/src/icons';

import Logo from '~/src/components/Logo';
import Form from './components/Form';

import template from './index.tpl';
import * as styles from './styles.module.css';
export default class Page extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
      handleFormSubmit: (params: Record<string, unknown>) => {
        // eslint-disable-next-line no-console
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

  componentDidRender() {
    const links = this.element.querySelectorAll('a[data-type="router-link"]');
    const router = new Router();
    links.forEach((link) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const { to } = <HTMLLinkElement>e.currentTarget.dataset;
        router.go(to);
      });
    });
  }
};
