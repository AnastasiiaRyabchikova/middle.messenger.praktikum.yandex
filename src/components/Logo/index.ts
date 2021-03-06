import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import template from './index.tpl';

export default class Logo extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'Logo',
      template,
      containerTemplate: '<span />',
    });
  }
};
