import VidsConfig from "../configs/vids";
import { Request } from "express";

class Vids {
  instance: any;
  config: any;

  constructor () {}

  async init () {
    this.instance = await import(VidsConfig.utilsPath);
    this.config = await this.instance.getIniStuff();
    await this.instance.getDb(this.config);
  }

  async getNexmo (token: string) {
    if (!this.instance) throw new Error("Not initialised");

    const id = this.getIdFromJwt(token);
    return this.instance.getNexmo(id);
  }

  getBearerToken (req: Request) {
    if (!this.instance) throw new Error("Not initialised");
    return this.instance.getBearerToken(req);
  }

  getIdFromJwt (token: string) {
    if (!this.instance) throw new Error("Not initialised");
    if (!this.config) throw new Error("Not initialised");
    return this.instance.getIdFromJwt(this.config, token);
  }
}

class VidsService {
  private static instance: Vids;

  static async getInstance () {
    if (VidsService.instance) return VidsService.instance;
    else {
      VidsService.instance = new Vids();
      await VidsService.instance.init();
      return VidsService.instance;
    }
  }
}

export default VidsService;


