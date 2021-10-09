import AuthApi from '~/src/api/auth-api';

class AuthControler {
  private api: AuthApi;

  constructor() {
    this.api = new AuthApi();
  }

  signIn(params) {
    try {
      this.api.signIn(params);
    } catch (err) {
      console.error(err);
    }
  }

  signUp(params) {
    try {
      this.api.signUp(params);
    } catch (err) {
      console.error(err);
    }
  }

  getUser() {
    try {
      this.api.getUser();
    } catch (err) {
      console.error(err);
    }
  }
};

export default new AuthControler();
