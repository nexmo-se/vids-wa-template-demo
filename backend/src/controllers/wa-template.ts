import Message from "../models/message";
import NexmoConfig from "../configs/nexmo";
import { Request, Response } from "express";

import WAService from "../services/whatsapp";
import VidsService from "../services/vids";

class WATemplateController {
  static async sendMessage (req: Request, res: Response) {
    const { to, content } = req.body;

    // Parse VIDS information here
    // Get authorization header, and parse it to get VIDS information 
    const vids = await VidsService.getInstance();
    const jwt = vids.getBearerToken(req);
    const userInformation = await vids.getNexmo(jwt);
    console.log(userInformation);

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