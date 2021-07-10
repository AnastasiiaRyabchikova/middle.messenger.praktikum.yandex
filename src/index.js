import './theme/index.css';
import ErrorPage from './pages/Error';
import render from '~/templator/render';

render(document.getElementById('root'), ErrorPage());
