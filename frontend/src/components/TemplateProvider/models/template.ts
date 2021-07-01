import lodash from "lodash";
import { BodyPayload, DocumentValue, HeaderType, LocationValue, MediaType } from "../types";

interface Constructor {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  bodyValues?: string[];
  footer?: string;
}

class Template {
  id: string;
  namespace: string;
  header?: HeaderType;
  body: string;
  bodyValues: string[];
  footer?: string;

  constructor(args: Constructor) {
    this.id = args.id;
    this.namespace = args.namespace;
    this.header = args.header;
    this.body = args.body;
    
    // get number of parameters inside the body
    const countParameters = args.body.split(/{{\d+}}/g).length - 1;
    if (countParameters === 0) this.bodyValues = [];
    else this.bodyValues = lodash.times(countParameters, lodash.constant(""));
    
    this.footer = args.footer;
  }

  headerPayload () {
    if (!this.header) return null;

    return {
      type: "header",
      parameters: [{
        type: this.header.value,
        [this.header.value]: this.header.userValue
      }]
    }
  }

  bodyPayload () {
    const countParameters = this.body.split(/{{\d+}}/g).length - 1;
    if (countParameters === 0) return null;

    const basePayload: BodyPayload = {
      type: "body",
      parameters: []
    }

    lodash(countParameters).times().forEach(
      (_, index) => {
        basePayload.parameters.push({
          type: "text",
          text: lodash(this.bodyValues[index]).isEmpty()? "": this.bodyValues[index]
        })
      }
    )

    return basePayload;
  }
}

export default Template;