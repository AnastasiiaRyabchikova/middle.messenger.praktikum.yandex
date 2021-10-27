import ChatAPI, {
  CreateChatData,
  DeleateChatData,
  FilterChatsParams,
  ChatData,
  AddUsersToChatData,
} from '@/api/chat-api';

class ChatsController {
  private api: typeof ChatAPI;

  constructor() {
    this.api = ChatAPI;
  }

  async create(data: CreateChatData): Promise<void> {
    try {
      await this.api.create(data);
    } catch (err) {
      console.error(err);
    }
  }

  async delete(data: DeleateChatData): Promise<void> {
    try {
      await this.api.delete(data);
    } catch (err) {
      console.error(err);
    }
  }

  async read(data: FilterChatsParams = {}): Promise<ChatData[] | undefined> {
    try {
      const response = await this.api.read(data);
      // eslint-disable-next-line
      return JSON.parse(response);
    } catch (err) {
      console.error(err);
    }
  }

  async addUsers(data: AddUsersToChatData): Promise<void> {
    try {
      return await this.api.addUsers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async removeUsers(data: AddUsersToChatData): Promise<void> {
    try {
      return await this.api.removeUsers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async getToken(chatId: number): Promise<string | void> {
    try {
      const response = await this.api.getToken(chatId);
      // eslint-disable-next-line
      const data: Record<string, string> = JSON.parse(response);
      return data.token;
    } catch (err) {
      console.error(err);
    }
  }
};

export default new ChatsController();
