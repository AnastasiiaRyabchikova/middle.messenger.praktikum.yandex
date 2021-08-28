import { PropsType } from '~/src/types/component';
import cx from 'classnames';
import * as Ryabact from 'ryabact';
import Logo from '~/src/components/Logo';
import template from './index.tpl';
import * as styles from './styles.module.css';


const messages: {
  [key: string]: string,
} = {
  404: 'Страница не найдена',
  500: 'Ошибка сервера',
};

export default class PageError extends Ryabact.Component {
  constructor (context: PropsType = {}) {
    const { code = 404 }: { code?: string } = context;
    const props: PropsType = {
      ...context,
      code,
      message: messages[code],
    };

    super({
      props,
      name: 'PageError',
      template,
      components: {
        Logo,
      },
    });
  }
};
