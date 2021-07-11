import './theme/index.css';
import render from '~/templator/render';
import routes from './routes';

const { pathname } = window.location;

const name = pathname.slice(1);
const Page = routes[name];

render(document.getElementById('root'), Page());
