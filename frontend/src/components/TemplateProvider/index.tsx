import Template from "./models/template";
import lodash from "lodash";
import { TemplateContext } from "./contexts/template";
import { HeaderUserValue } from "./types";

import { useVids } from "components/VidsProvider";
import { useState, useEffect } from "react";
import { useTemplate } from "./hooks/template";

interface ITemplateProvider {
  children: any;
}

function TemplateProvider({ children }: ITemplateProvider) {
  const { userInformation } = useVids();

  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | undefined>();
  const [targetPhoneNumber, setTargetPhoneNumber] = useState<string>(userInformation.phone);

  function updateHeaderUserValue (value: HeaderUserValue) {
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

  function updateBodyUserValue (index: number, value: string) {
    setSelectedTemplate(
      (template) => {
        const clonnedTemplate = lodash(template).clone();
        
        clonnedTemplate.bodyValues[index] = value;
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
            value: "document",
            userValue: {
              link: "https://www.vonage.com/content/dam/vonage/us-en/resources/pdfs/Going_for_CX_Gold_Healthcare.pdf",
              filename: "Ticket.pdf"
            }
          },
          body: "Hi {{1}}, Here is your Boarding Pass for your flight {{2}} from {{3}} to {{4}}."
        }),
        new Template({
          id: "airline_ticket_update_location",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "location",
            userValue: {
              longitude: "-122.425332",
              latitude: "37.758056",
              name: "Vonage Singapore",
              address: "5 Temasek Boulevard, Tower 5, #17-01, 038985"
            }
          },
          body: "Your nearest airport is here."
        }),
        new Template({
          id: "airline_ticket_update_media",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "image",
            userValue: {
              link: "https://media.trustradius.com/product-logos/L4/SU/HIH3BT8SDLDB.JPEG"
            }
          },
          body: "Hi {{1}}, Here is your Boarding Pass for your flight {{2}} from {{3}} to {{4}}."
        }),
        new Template({
          id: "airline_ticket_update_noparameter",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "document",
            userValue: {
              link: "https://www.vonage.com/content/dam/vonage/us-en/resources/pdfs/Going_for_CX_Gold_Healthcare.pdf",
              filename: "Ticket.pdf"
            }
          },
          body: "Hi,here is your boarding pass. Thank you."
        }),
        new Template({
          id: "airline_ticket_update_video",
          namespace: "whatsapp:hsm:technology:nexmo",
          header: {
            type: "media",
            value: "video",
            userValue: {
              link: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"
            }
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
        updateHeaderUserValue,
        updateBodyUserValue
      }}
    >
      {children}
    </TemplateContext.Provider>    
  )
}

export { useTemplate }
export type { HeaderUserValue }
export default TemplateProvider;