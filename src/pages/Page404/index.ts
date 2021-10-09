import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '~/src/components/Logo';
import template from './index.tpl';
import * as styles from './styles.module.css';

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
        Logo,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};