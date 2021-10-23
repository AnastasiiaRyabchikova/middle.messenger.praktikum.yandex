import AuthAPI, { LoginData, SignupData, UserData } from '~/src/api/auth-api';
import { store } from '~/src/store';
import { deleteUser, setError, setUser } from '~/src/store/user';

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();
  }

  async signUp(data: SignupData) {
    try {
      await this.api.signUp(data);
      await this.fetchUser();
    } catch (e) {
      store.dispatch(setError(e as { reason: string }));
    }
  }

  async signIn(data: LoginData) {
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
      return user;
    } catch (e) {
      store.dispatch(deleteUser());
    }
  }
}

export default new AuthController();
