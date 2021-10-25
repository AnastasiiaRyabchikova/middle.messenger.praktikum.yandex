export type UserData = {
  id: string;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string,
};

export type SignUpUserData = Omit<UserData, 'id' | 'avatar' | 'display_name'> & { password: string };
export type SignInUserData = {
  login: string;
  password: string;
};
export type EditUserData = Omit<UserData, 'id'>;

export type EditPasswordData = {
  oldPassword: string,
  newPassword: string,
};
