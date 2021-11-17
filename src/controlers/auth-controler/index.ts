import AuthAPI from '@/api/auth-api';
import {
  SignUpUserData,
  SignInUserData,
  UserData,
} from '@/api/user-interfaces';
import { store } from '@/store';
import { deleteUser, setError, setUser } from '@/store/user';

class AuthController {
  private api: typeof AuthAPI;

  constructor() {
    this.api = AuthAPI;
  }

  async signUp(data: SignUpUserData) {
    try {
      await this.api.signUp(data);
      await this.fetchUser();
    } catch (e) {
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async signIn(data: SignInUserData) {
    try {
      await this.api.signIn(data);
      await this.fetchUser();
    } catch (e) {
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async logout() {
    try {
      await this.api.logOut();
      store.dispatch(deleteUser());
    } catch (e) {
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async fetchUser(): Promise<UserData | void> {
    try {
      const user = await this.api.getUser();
      store.dispatch(setUser(JSON.parse(user)));
      // eslint-disable-next-line
      return JSON.parse(user);
    } catch (e) {
      store.dispatch(deleteUser());
    }
  }
}

export default new AuthController();
