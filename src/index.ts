import { render } from 'templator';
import { interfaceRyabactComponents } from './types/component';
import ErrorPage from '~/src/pages/Error';

import routes from './routes';

import './theme/index.css';

const { pathname } = window.location;

const name = pathname.slice(1);
const Page: interfaceRyabactComponents = routes[name] || new ErrorPage({ code: 404 });

if (Page) {
  render(document.getElementById('root'), Page.element);
}
