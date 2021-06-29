import Message from "../models/message";
import NexmoConfig from "../configs/nexmo";
import WAService from "../services/whatsapp";

class WATemplateController {
  static async sendMessage(req: any, res: any) {
    const { to, content } = req.body;

    const message = new Message({
      from: {
        type: "whatsapp",
        number: NexmoConfig.waNumber
      },
      to,
      content
    });

    const waResponse = await WAService.sendMessage({ message });
    return res.json(waResponse).end()
  }
}

export default WATemplateController;