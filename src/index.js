import './theme/index.css';
import render from '~/src/templator/render';

import ErrorPage from '~/src/pages/Error';

import routes from './routes';

const { pathname } = window.location;

const name = pathname.slice(1);
const Page = routes[name] || ErrorPage({ code: 404 });

render(document.getElementById('root'), Page);
