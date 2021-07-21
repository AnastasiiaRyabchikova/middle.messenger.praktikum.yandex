import pathnames from '@/constants/pathnames';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Chats from './pages/Chats';
import UserForm from './pages/UserForm';
import ErrorPage from './pages/Error';

export default {
  [pathnames.signIn]: SignIn(),
  [pathnames.signUp]: SignUp(),
  [pathnames.changePassword]: ChangePassword(),
  [pathnames.chats]: Chats(),
  [pathnames.userForm]: UserForm(),
  [pathnames.error500]: ErrorPage({ code: 500 }),
};
