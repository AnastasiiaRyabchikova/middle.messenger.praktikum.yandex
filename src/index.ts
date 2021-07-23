import { compiledComponent } from './types/component';
import { render } from 'templator';

import ErrorPage from '~/src/pages/Error';

import routes from './routes';

import './theme/index.css';

const { pathname } = window.location;

const name = pathname.slice(1);
const Page: compiledComponent = routes[name] || ErrorPage({ code: 404 });

if (Page) {
  render(document.getElementById('root'), Page);
}

