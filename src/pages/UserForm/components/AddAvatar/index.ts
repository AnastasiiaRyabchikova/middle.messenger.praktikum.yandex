import * as Ryabact from 'ryabact';
import cx from 'classnames';
import { PropsType } from '@/types/component';
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';
import template from './index.tpl';
import styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  /* eslint-disable */
  constructor(context: any = {}) {
    const props: PropsType = {
      ...context,
      class: cx([
        styles.wrapper,
        context.class,
      ]),
      handleFileInputChange(e: Event) {
        const { files } = (e.target as HTMLInputElement);
        if (!files) {
          return;
        }

        const file = files[0];
        const formData = new FormData();
        formData.append('avatar', file, 'avatar');

        context.events.submit(formData);
      },
    };
    /* eslint-disable */

    super({
      props,
      name: 'AddAvatarUserForm',
      template,
      components: {
        Avatar,
        Input,
      },
      containerTemplate: `<div class="${styles.container}" />`,
    });
  }
};
