import Router from '~/src/modules/Router';
import Home from './pages/Home';
import './theme/index.css';

const root = document.getElementById('root');

if (root) {
  const router = new Router(root, Home);

  router
    .use([])
    .setFallbackPage(Home)
    .start();
}
