import pathnames from '~/src/constants/pathnames';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Chats from './pages/Chats';
import UserForm from './pages/UserForm';
import ErrorPage from './pages/Error';

type pageByRoutes = {
  [pathname: string]: HTMLElement
};

const routes: pageByRoutes = {
  [pathnames.signIn]: SignIn(),
  [pathnames.signUp]: SignUp(),
  [pathnames.changePassword]: ChangePassword(),
  [pathnames.chats]: Chats(),
  [pathnames.userForm]: UserForm(),
  [pathnames.error500]: ErrorPage({ code: 500 }),
};

export default routes;
