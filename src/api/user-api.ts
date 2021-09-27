import HTTP from 'http-transport';

const userAPIInstance: HTTP = new HTTP('api/v2/auth');

export default class UserApi {
  signUp(data): Promise<unknown> {
    return userAPIInstance.post('/signup', { data });
  }

  signIn(): Promise<any> {
    return userAPIInstance.post('/signin');
  }

  logOut(): Promise<any> {
    return userAPIInstance.post('/logout');
  }

  getUser(): Promise<any> {
    return userAPIInstance.get('/user');
  }
};
