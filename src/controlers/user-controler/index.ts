import { store } from '@/store';
import { setUser } from '@/store/user';
import UserAPI from '@/api/user-api';
import {
  EditUserData,
  EditPasswordData,
  UserData,
} from '@/api/user-interfaces';

class UserController {
  private api: typeof UserAPI;

  constructor() {
    this.api = UserAPI;
  }

  async edit(data: EditUserData): Promise<UserData | undefined> {
    try {
      const user = await this.api.edit(data);
      store.dispatch(setUser(JSON.parse(user)));
      // eslint-disable-next-line
      return JSON.parse(user);
    } catch (err) {
      console.error(err);
    }
  }

  async editAvatar(data: FormData): Promise<UserData | undefined> {
    try {
      const user = await this.api.editAvatar(data);
      store.dispatch(setUser(JSON.parse(user)));
      // eslint-disable-next-line
      return JSON.parse(user);
    } catch (err) {
      console.error(err);
    }
  }

  async editPassword(data: EditPasswordData): Promise<void> {
    try {
      await this.api.editPassword(data);
    } catch (err) {
      console.error(err);
    }
  }
};

export default new UserController();
