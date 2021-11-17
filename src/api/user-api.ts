import BaseApi from '../utils/base-api';
import {
  EditUserData,
  EditPasswordData,
} from './user-interfaces';

/* eslint-disable */
class UserApi extends BaseApi {
  constructor() {
    super('/user');
  }

  edit(data: EditUserData): Promise<string> {
    return this.http.put('/profile', { data });
  }

  editAvatar(data: FormData): Promise<string> {
    return this.http.put('/profile/avatar', { data });
  }

  editPassword(data: EditPasswordData): Promise<void> {
    return this.http.put('/password', { data });
  }
};

export default new UserApi();
