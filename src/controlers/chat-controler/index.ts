import ChatAPI, {
  CreateChatData,
  DeleateChatData,
  FilterChatsParams,
  ChatData,
  AddUsersToChatData,
} from '~/src/api/chat-api';

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

  async read(data: FilterChatsParams): Promise<ChatData[]> {
    try {
      const response = await this.api.read(data);
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

  async getToken(chatId: number): string {
    try {
      const response = await this.api.getToken(chatId);
      const data: Record<string, string> = JSON.parse(response);
      return data.token;
    } catch (err) {
      console.error(err);
    }
  }
};

export default new ChatsController();
