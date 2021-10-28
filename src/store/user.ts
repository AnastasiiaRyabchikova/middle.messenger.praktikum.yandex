import { Action } from '@/modules/Store';
import { UserData } from '@/api/user-interfaces';

const SET_USER = 'user/SET';
const DELETE_USER = 'user/DELETE';
const SET_ERROR = 'user/SET_ERROR';

export const setUser = (user: UserData): Action => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = (): Action => ({
  type: DELETE_USER,
});

export const setError = (error: { reason: string }): Action => ({
  type: SET_ERROR,
  payload: error,
});

interface UserProfile {
  [key: string]: any;
};

interface UserState {
  profile: Record<string, any> | null;
  error: Record<string, any> | null;
};

const initialState: UserState = {
  profile: null,
  error: null,
};

export default (state: UserState = initialState, action: Action): UserState => {
  switch (action.type) {
    case SET_USER:
      return { error: null, profile: action.payload as UserProfile };
    case DELETE_USER:
      return { profile: null, error: null };
    case SET_ERROR:
      return { error: action.payload as UserProfile, profile: null };
    default:
      return state;
  }
};
