import { render } from 'templator';
import { interfaceRyabactComponent } from './types/component';
import ErrorPage from './pages/Error';

import routes from './routes';

import './theme/index.css';

const { pathname } = window.location;

const name = pathname.slice(1);
const Page: interfaceRyabactComponent = routes[name] || new ErrorPage({ code: 404 });

if (Page) {
  render(document.getElementById('root'), Page.element);
}
