import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import { PropsType } from '../../../types/component';
import * as Ryabact from '../../Ryabact';
import Router from './index';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>', { url: 'http://localhost' });

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
global.window = dom.window as any;
global.document = dom.window.document;

class FallBackPage extends Ryabact.Component {
  constructor(context: PropsType = {}) {
    const props: PropsType = {
      ...context,
    };

    super({
      props,
      name: 'FallBackPage',
      template: '<div/>',
      containerTemplate: '<div />',
    });
  }
};

const router = new Router(document.createElement('div'));

router
  .use([])
  .setFallbackPage(FallBackPage)
  .start();

describe('Роутер', () => {
  it('Не должно быть повторной инициализации роутера', () => {
    const newRouter = new Router(document.createElement('div'));
    expect(router).to.equal(newRouter);
  });

  it('Если роутер не найдет активную страницу, должна быть FallBackPage', () => {
    router.go('/page');
    return router.currentRoute?._block instanceof FallBackPage;
  });

  it('Проверка переходов по роутам', () => {
    router.go('/page-1');
    router.go('/page-2');
    router.back();
    router.forward();
    router.go('/page-3');
    expect(router.history.length).to.eq(5);
  });
});
