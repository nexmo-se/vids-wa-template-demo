import lodash from "lodash";
import { BodyPayload, HeaderType, LocationValue } from "../types";

interface Constructor {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  footer?: string;
}

class Template {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  footer?: string;

  constructor(args: Constructor) {
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
            link: this.header.userValue ?? "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
          }
        }]
      }
    } else if(this.header.value === "location") {
      const locationValue = this.header.userValue as LocationValue;
      return {
        type: "header",
        parameters: [{
          type: this.header.value,
          [this.header.value]: {
            longitude: lodash(locationValue.longitude).toNumber(),
            latitude: lodash(locationValue.latitude).toNumber(),
            name: locationValue.name,
            address: locationValue.address
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

    if (parameters.length === 1) return null
    else return basePayload;
  }
}

export default Template;