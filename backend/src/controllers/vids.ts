import VidsService from "../services/vids";
import { Request, Response } from "express";

class VidsController {
  static async info (req: Request, res: Response) {
    const vids = await VidsService.getInstance();
    const jwt = vids.getBearerToken(req);
    const userInformation = await vids.getNexmo(jwt);

    return res.json(userInformation).end();
  }
}

export default VidsController;
