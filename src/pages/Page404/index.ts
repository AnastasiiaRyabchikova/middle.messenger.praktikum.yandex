import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import Logo from '@/components/Logo';
import RouterLink from '@/components/RouterLink';
import template from './index.tpl';
import styles from './styles.module.css';

export default class PageError extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'PageError',
      template,
      components: {
        RouterLink,
        Logo,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
