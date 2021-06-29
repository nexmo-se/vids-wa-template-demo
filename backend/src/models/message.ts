import { v4 as uuid } from "uuid";

interface INumberInformation {
  type: "whatsapp",
  number: string;
}

interface IMessage {
  id: string;
  from: INumberInformation;
  to: INumberInformation;
  content: any;
}

interface IConstructor {
  id?: string;
  from: INumberInformation;
  to: INumberInformation;
  content: any;
}

class Message implements IMessage {
  id: string;
  from: INumberInformation;
  to: INumberInformation;
  content: any;

  constructor(args: IConstructor) {
    this.id = args.id ?? uuid();
    this.from = args.from;
    this.to = args.to;
    this.content = args.content;
  }
}
export default Message;