import * as Ryabact from 'ryabact';
import { PropsType } from '@/types/component';
import Logo from '@/components/Logo';
import template from './index.tpl';
import * as styles from './styles.module.css';

const messages: {
  [key: string]: string,
} = {
  404: 'Страница не найдена',
  500: 'Ошибка сервера',
};

export default class PageError extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const { code } = context;
    const props: PropsType = {
      ...context,
      code,
      message: messages[code as string || '404'],
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
