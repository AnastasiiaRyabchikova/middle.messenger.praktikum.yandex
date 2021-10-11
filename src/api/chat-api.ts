import HTTP from 'http-transport';
import BaseApi from '../utils/base-api';

export interface CreateChatData {
  title: string,
}

export interface DeleateChatData {
  chatId: number,
}

export default class ChatsApi extends BaseApi {
  constructor() {
    super(new HTTP('/chats'));
  }

  create(data: CreateChatData): Promise<void> {
    return this.http.post('', { data });
  }

  delete(data: DeleateChatData): Promise<void> {
    return this.http.delete('', { data });
  }

  read(): Promise<string> {
    return this.http.get('');
  }
};
