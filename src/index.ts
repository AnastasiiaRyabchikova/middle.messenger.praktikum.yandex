import { render } from 'templator';
// import { compiledComponentType } from './types/component';
import ErrorPage from '~/src/pages/Error';

// import routes from './routes';

import './theme/index.css';

// const { pathname } = window.location;

// const name = pathname.slice(1);
// const Page: compiledComponentType = routes[name] || ErrorPage({ code: 404 });

// if (Page) {
//   render(document.getElementById('root'), Page);
// }

const Page = new ErrorPage({ label: 'Кнопка' });

render(document.getElementById('root'), Page.element);
