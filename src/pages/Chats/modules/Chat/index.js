import Templator from '~/templator';

import ChatHistory from '~/src/modules/ChatHistory';

import template from './index.tpl';

const component = {
  name: 'ChatPage',
  template,
  components: {
    ChatHistory,
  },
};

const messages = [
  {
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    date: '2 мая',
    author: 'Андрей',
    time: '10:00',
  },
  {
    text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
    date: '2 мая',
    author: 'Андрей',
    isMine: true,
    time: '11:00',
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
