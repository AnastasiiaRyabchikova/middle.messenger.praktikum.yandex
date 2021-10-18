import * as Ryabact from 'ryabact';
import { PropsType } from '~/src/types/component';
import { IconArrowLeft } from '~/src/icons';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Page extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'BottunBack',
      template,
      components: {
        IconArrowLeft,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
