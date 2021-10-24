import { store } from '~/src/store';
import { deleteUser, setError, setUser } from '~/src/store/user';
import UserAPI from '~/src/api/user-api';
import {
  EditUserData,
  EditPasswordData,
  UserData,
} from '~/src/api/user-interfaces';

class UserController {
  private api: typeof UserAPI;

  constructor() {
    this.api = UserAPI;
  }

  async edit(data: EditUserData): Promise<UserData> {
    try {
      const user = await this.api.edit(data);
      store.dispatch(setUser(JSON.parse(user)));
      return JSON.parse(user);
    } catch (err) {
      console.error(err);
    }
  }

  async editAvatar(data: FormData): Promise<UserData> {
    try {
      const user = await this.api.editAvatar(data);
      store.dispatch(setUser(JSON.parse(user)));
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
