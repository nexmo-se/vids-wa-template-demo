import NexmoConfig from "../configs/nexmo";
import Message from "../models/message";

import FetchService from "./fetch";
import NexmoService from "./nexmo";

interface ISendMessage {
  message: Message;
}

class WAService {
  static async sendMessage({ message }: ISendMessage) {
    const vonage = await NexmoService.getInstance("master");

    // @ts-ignore
    // Ignored because the `generateJwt()` is not exported or not available in
    // typings document. This need to be improvied.
    const jwt = vonage.generateJwt();
    const url = `${NexmoConfig.apiUrl}/v0.1/messages`;
    const body = {
      from: {
        type: message.from.type,
        number: message.from.number
      },
      to: message.to,
      message: {
        content: message.content
      }
    }

    const response = await FetchService.fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    return response;
  }
}
export default WAService