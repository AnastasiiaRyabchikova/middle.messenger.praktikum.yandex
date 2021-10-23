import HTTP from 'http-transport';
import BaseApi from '../utils/base-api';

export interface SignupData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface LoginData {
  login: string;
  password: string;
}

export type UserData = Omit<SignupData, 'password'> & { avatar: string; display_name: string; };

export default class AuthApi extends BaseApi {
  constructor() {
    super(new HTTP('/auth'));
  }

  signUp(data: SignupData): Promise<{ id: number }> {
    return this.http.post('/signup', { data });
  }

  signIn(data: LoginData): Promise<void> {
    return this.http.post('/signin', { data });
  }

  logOut(): Promise<void> {
    return this.http.post('/logout');
  }

  getUser(): Promise<string> {
    return this.http.get('/user');
  }
};
