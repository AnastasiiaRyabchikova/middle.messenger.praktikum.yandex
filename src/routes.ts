import routeSettings from '~/src/modules/Router/interfaces/route-settings';
import pathnames from '~/src/constants/pathnames';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Chats from './pages/Chats';
import UserForm from './pages/UserForm';

export const routesForUnknownUser: Array<routeSettings> = [
  {
    pathname: pathnames.signIn,
    component: SignIn,
  },
  {
    pathname: pathnames.signUp,
    component: SignUp,
  },
];

export const routesForUser: Array<routeSettings> = [
  {
    pathname: pathnames.changePassword,
    component: ChangePassword,
  },
  {
    pathname: pathnames.chats,
    component: Chats,
  },
  {
    pathname: pathnames.userForm,
    component: UserForm,
  },
];
