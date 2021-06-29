import Template from "./models/template";
import lodash from "lodash";
import { TemplateContext } from "./contexts/template";
import { LocationValue } from "./types";

import { useState, useEffect } from "react";
import { useTemplate } from "./hooks/template";

interface ITemplateProvider {
  children: any;
}

function TemplateProvider({ children }: ITemplateProvider) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();
  const [targetPhoneNumber, setTargetPhoneNumber] = useState<string>("");

  function updateHeaderUserValue (value: string | LocationValue) {
    setSelectedTemplate(
      (template) => {
        const clonnedTemplate = lodash(template).clone();

        if (!clonnedTemplate) return template;
        if (!clonnedTemplate.header) return template;

        clonnedTemplate.header.userValue = value;
        return clonnedTemplate;
      }
    )
  }

  useEffect(
    () => {
      setTemplates([
        new Template({
          id: "airline_ticket_update",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "document"
          },
          body: "Hi {{1}}, Here is your Boarding Pass for your flight {{2}} from {{3}} to {{4}}."
        }),
        new Template({
          id: "airline_ticket_update_location",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "location"
          },
          body: "Your nearest airport is here."
        }),
        new Template({
          id: "airline_ticket_update_media",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "image"
          },
          body: "Hi {{1}}, Here is your Boarding Pass for your flight {{2}} from {{3}} to {{4}}."
        }),
        new Template({
          id: "airline_ticket_update_noparameter",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "document"
          },
          body: "Hi,here is your boarding pass. Thank you."
        }),
        new Template({
          id: "airline_ticket_update_video",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "video"
          },
          body: "Hi {{1}}, Here is your Boarding Pass for your flight {{2}} from {{3}} to {{4}}."
        }),
        new Template({
          id: "demo_cse_delivery_apac",
          namespace: "whatsapp:hsm:technology:nexmo",
          body: "Thank you for ordering with Nexmo Delivery.\nYour order is being shipped.\n\nOrder: {{1}} - {{2}}\nStatus: {{3}}\nDate: {{4}}\nTime: {{5}}\nAddress: {{6}}"
        })
      ])
    },
    []
  );

  useEffect(
    () => {
      if (templates.length > 0) {
        setSelectedTemplate(templates[0]);
      }
    },
    [templates]
  )
  
  return (
    <TemplateContext.Provider
      value={{
        templates,
        targetPhoneNumber,
        setTargetPhoneNumber,
        selectedTemplate,
        setSelectedTemplate,
        updateHeaderUserValue
      }}
    >
      {children}
    </TemplateContext.Provider>    
  )
}

export { useTemplate }
export default TemplateProvider;