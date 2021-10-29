import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import Logo from '~/src/components/Logo';
import RouterLink from '~/src/components/RouterLink';
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
        RouterLink,
        Logo,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
