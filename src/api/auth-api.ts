import BaseApi from '../utils/base-api';
import {
  SignUpUserData,
  SignInUserData,
} from './user-interfaces';

/* eslint-disable */
class AuthApi extends BaseApi {
  constructor() {
    super('/auth');
  }

  signUp(data: SignUpUserData): Promise<string> {
    return this.http.post('/signup', { data });
  }

  signIn(data: SignInUserData): Promise<void> {
    return this.http.post('/signin', { data });
  }

  logOut(): Promise<void> {
    return this.http.post('/logout');
  }

  getUser(): Promise<string> {
    return this.http.get('/user');
  }
};

export default new AuthApi();
