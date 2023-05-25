import { ChannelType } from "discord.js";

// @ts-ignore
export class MockMessage {
  mockReplies: string[] = [];
  public channel: {
    type: ChannelType;
  };
  public author = {
    id: `nopeless`,
  };
  public mentions = {
    users: new Map(),
    has: () => false,
  };
  constructor(public content: string, options: { type?: ChannelType } = {}) {
    this.channel = {
      type: options.type ?? ChannelType.GuildText,
    };
  }

  async reply(message: string | { content: string }) {
    this.mockReplies.push(
      typeof message === `string` ? message : message.content
    );
    return;
  }
}
