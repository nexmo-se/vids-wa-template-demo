import { HeaderType } from "../types";

type Paramater = {
  type: string;
  text: string;
}

interface BodyPayload {
  type: "body",
  parameters: Paramater[]
}

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

  headerPayload () {
    if (!this.header) return null;

    const mediaType = ["document", "image", "video"];
    if (mediaType.includes(this.header.value)) {
      return {
        type: "header",
        parameters: [{
          type: this.header.value,
          [this.header.value]: {
            link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          }
        }]
      }
    } else if(this.header.value === "location") {
      return {
        type: "header",
        parameters: [{
          type: this.header.value,
          [this.header.value]: {
            longitude: -122.425332,
            latitude: 37.758056,
            name: "Facebook HQ",
            address: "1 Hacker Way, Menlo Park, CA 94025"
          }
        }]
      }
    } else return null;
  }

  bodyPayload () {
    const parameters = this.body.split(/{{\d+}}/g);
    const basePayload: BodyPayload = {
      type: "body",
      parameters: []
    }

    parameters.forEach(
      (_, index) => {
        if (index === 0) return;
        basePayload.parameters.push({
          type: "text",
          text: `${index}`
        })
      }
    )

    return basePayload;
  }
}

export default Template;