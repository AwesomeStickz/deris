import { DiscordChannel } from "discordeno/types";
import { Client } from "../Client.js";
import ThreadChannel from "./ThreadChannel.js";

export class PublicThreadChannel extends ThreadChannel {
    constructor(data: DiscordChannel, client: Client, messageLimit?: number) {
        super(data, client, messageLimit)
    }
}

export default PublicThreadChannel;