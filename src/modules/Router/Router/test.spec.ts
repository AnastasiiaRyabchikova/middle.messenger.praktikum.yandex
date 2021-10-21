import Router from './index';

const router = new Router(document.createElement('div'));

describe('Роутер', () => {
  it('Не должно быть повторной инициализации роутера', () => {
    const newRouter = new Router(document.createElement('div'));
    return router === newRouter;
  });
});
