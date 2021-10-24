import BaseApi from '../utils/base-api';
import {
  UserData,
  EditUserData,
  EditPasswordData,
} from './user-interfaces';

class UserApi extends BaseApi {
  constructor() {
    super('/user');
  }

  edit(data: EditUserData): Promise<UserData> {
    return this.http.put('/profile', { data });
  }

  editAvatar(data: FormData): Promise<UserData> {
    return this.http.put('/profile/avatar', { data });
  }

  editPassword(data: EditPasswordData): Promise<void> {
    return this.http.put('/password', { data });
  }
};

export default new UserApi();
