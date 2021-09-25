import Router from '~/src/Router';
import routes from './routes';
import './theme/index.css';

const root = document.getElementById('root');

const router = new Router(root);

router
  .use(routes)
  .start();
