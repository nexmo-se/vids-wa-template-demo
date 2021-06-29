import Nexmo from "nexmo";
import NexmoConfig from "../configs/nexmo";

class NX{
  static _instance: any = null;

  static initialize() {
    NX._instance = new Nexmo({
      apiKey: NexmoConfig.apiKey,
      apiSecret: NexmoConfig.apiSecret,
      applicationId: NexmoConfig.applicationID,
      privateKey: NexmoConfig.privateKey
    });
  }

  static get instance(): any {
    if(!NX._instance) NX.initialize();
    return NX._instance;
  }
}
export default NX;