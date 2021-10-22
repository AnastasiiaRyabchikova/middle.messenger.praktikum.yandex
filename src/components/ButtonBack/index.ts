import * as Ryabact from '~/src/modules/Ryabact';
import { PropsType } from '~/src/types/component';
import { IconArrowLeft } from '~/src/icons';
import template from './index.tpl';

export default class Page extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'ButtonBack',
      template,
      components: {
        IconArrowLeft,
      },
      containerTemplate: '<div />',
    });
  }
};
