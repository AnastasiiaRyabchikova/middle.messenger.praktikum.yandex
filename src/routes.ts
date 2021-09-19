import { interfaceRyabactComponent } from './types/component';
import pathnames from '~/src/constants/pathnames';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Chats from './pages/Chats';
import UserForm from './pages/UserForm';
import ErrorPage from './pages/Error';

type pageByRoutes = {
  [pathname: string]: interfaceRyabactComponent,
};

const routes: pageByRoutes = {
  [pathnames.signIn]: new SignIn(),
  [pathnames.signUp]: new SignUp(),
  [pathnames.changePassword]: new ChangePassword(),
  [pathnames.chats]: new Chats(),
  [pathnames.userForm]: new UserForm(),
  [pathnames.error500]: new ErrorPage({ code: 500 }),
};

export default routes;
