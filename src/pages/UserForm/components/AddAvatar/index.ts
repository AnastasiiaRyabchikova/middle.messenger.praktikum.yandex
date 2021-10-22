import * as Ryabact from '~/src/modules/Ryabact';
import cx from 'classnames';
import { PropsType } from '~/src/types/component';
import Avatar from '~/src/components/Avatar';
import Input from '~/src/components/Input';
import template from './index.tpl';
import * as styles from './styles.module.css';

export default class Component extends Ryabact.Component {
  constructor(context: PropsType = {}) {
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
        formData.append('file', file, 'avatar');

        context.events.submit(formData);
      },
    };

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
