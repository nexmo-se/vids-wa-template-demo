import Vonage from "@vonage/server-sdk";
import VidsService from "./vids";

type InstanceType = "master" | "private";
type Instances = Record<InstanceType, Vonage>;

class NX {
  private static instances: Instances = {
    master: undefined,
    private: undefined
  }

  private static async init (type: InstanceType) {
    // We directly uses getNexmo, assuming the token already in the local state
    // It will throw error if the token is not in local state
    const vids = await VidsService.getInstance();
    const userInformation = await vids.getNexmo();
    const options = {
      apiKey: (type === "master")? userInformation.masterkey: userInformation.key,
      apiSecret: (type === "master")? userInformation.mastersecret: userInformation.secret,
      applicationId: (type === "master")? userInformation.masterapp: userInformation.app_id,
      privateKey: (type === "master")? userInformation.masterkeyfile: Buffer.from(userInformation.keyfile)
    }

    NX.instances[type] = new Vonage(options);
  }

  static async getInstance (type: InstanceType) {
    if (!NX.instances[type]) await NX.init(type);
    return NX.instances[type];
  }
}

export default NX;