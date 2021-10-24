import HTTP from '../modules/HTTPTransport';
import BaseApi from '../utils/base-api';
import {
  SignUpUserData,
  SignInUserData,
} from './user-interfaces';

export default class AuthApi extends BaseApi {
  constructor() {
    super(new HTTP('/auth'));
  }

  signUp(data: SignUpUserData): Promise<{ id: number }> {
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
