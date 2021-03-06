import BaseApi from '../utils/base-api';

export interface CreateChatData {
  title: string;
}

export interface DeleateChatData {
  chatId: number;
}

export interface FilterChatsParams {
  chatId?: number;
}

export interface ChatData {
  id: number;
  title: string;
  avatar: string;
  unread_count: number;
  last_message: {
    user: {
      first_name: string;
      second_name: string;
      avatar: string;
      email: string;
      login: string;
      phone: string;
    },
    time: string;
    content: string;
  },
}

export interface AddUsersToChatData {
  users: number[];
  chatId: number;
}

export interface TokenData {
  token: string,
}

/* eslint-disable */
class ChatsApi extends BaseApi {
  constructor() {
    super('/chats');
  }

  create(data: CreateChatData): Promise<void> {
    return this.http.post('', { data });
  }

  delete(data: DeleateChatData): Promise<void> {
    return this.http.delete('', { data });
  }

  read(data: FilterChatsParams = {}): Promise<string> {
    return this.http.get('', { data });
  }

  addUsers(data: AddUsersToChatData): Promise<void> {
    return this.http.put('/users', { data });
  }

  removeUsers(data: AddUsersToChatData): Promise<void> {
    return this.http.delete('/users', { data });
  }

  getToken(chatId: number): Promise<string> {
    return this.http.post(`/token/${chatId}`);
  }
};

export default new ChatsApi();
