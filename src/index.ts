import Router from '~/src/modules/Router';
import Page404 from '~/src/pages/Page404';
import routes from './routes';
import './theme/index.css';

const root = document.getElementById('root');

if (root) {
  const router = new Router(root, Page404);

  router
    .use(routes)
    .start();
}
