import HTTP from '../modules/HTTPTransport';
import BaseApi from '../utils/base-api';

export interface EditUserData {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface UserData extends EditUserData {
  id: string,
  avatar: string,
}

export interface EditPasswordData {
  oldPassword: string,
  newPassword: string,
}

export default class ChatsApi extends BaseApi {
  constructor() {
    super(new HTTP('/user'));
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
