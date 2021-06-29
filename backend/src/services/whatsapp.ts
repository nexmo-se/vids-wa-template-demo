import NexmoConfig from "../configs/nexmo";
import FetchService from "./fetch";
import NexmoService from "./nexmo";
import Message from "../models/message";

interface ISendMessage {
  message: Message;
}

class WAService {
  static async sendMessage({ message }: ISendMessage) {
    const jwt = NexmoService.instance.generateJwt();
    const url = `${NexmoConfig.apiURL}/messages`;
    
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

    const jsonResponse = JSON.parse(response);
    return jsonResponse;
  }
}
export default WAService