import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import { IconArrowLeft } from '@/icons';
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
