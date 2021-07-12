import routes from '~/src/constants/routes';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ChangePassword from './pages/ChangePassword';
import Chats from './pages/Chats';
import UserForm from './pages/UserForm';
import ErrorPage from './pages/Error';

export default {
  [routes.signIn]: SignIn(),
  [routes.signUp]: SignUp(),
  [routes.changePassword]: ChangePassword(),
  [routes.chats]: Chats(),
  [routes.userForm]: UserForm(),
  [routes.error500]: ErrorPage({ code: 500 }),
};
