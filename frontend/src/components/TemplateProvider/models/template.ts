import { HeaderType } from "../types";

interface ITemplate {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  footer?: string;
}

class Template implements ITemplate {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  footer?: string;

  constructor(args: ITemplate) {
    this.id = args.id;
    this.namespace = args.namespace;
    this.header = args.header;
    this.body = args.body;
    this.footer = args.footer;
  }
}

export default Template;