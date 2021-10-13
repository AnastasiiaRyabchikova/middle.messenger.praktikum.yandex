import ChatAPI, {
  CreateChatData,
  DeleateChatData,
  FilterChatsParams,
  ChatData,
} from '~/src/api/chat-api';

class ChatsController {
  private api: ChatAPI;

  constructor() {
    this.api = new ChatAPI();
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
      return response;
    } catch (err) {
      console.error(err);
    }
  }
};

export default new ChatsController();
