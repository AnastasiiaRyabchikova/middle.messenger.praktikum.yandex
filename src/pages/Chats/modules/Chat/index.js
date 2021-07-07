import Templator from '~/templator';

import Chat from '~/src/modules/Chat';

import template from './index.tpl';

const component = {
  name: 'ChatPage',
  template,
  components: {
    Chat,
  },
};

const messages = [
  {
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    date: '2 мая',
    author: 'Андрей',
  },
  {
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    date: '2 мая',
    author: 'Андрей',
    isMine: true,
  },
];

const Page = (props) => {
  const context = {
    ...props,
    messages,
  };
  return new Templator(component).compile(context);
};

export default Page;
