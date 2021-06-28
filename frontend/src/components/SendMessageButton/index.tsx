import Config from "configs";

import { useState } from "react";
import { useTemplate } from "components/TemplateProvider";

function SendMessageButton() {
  const [sending, setSending] = useState<boolean>(false);
  const { selectedTemplate } = useTemplate();

  async function handleSendMessageClick() {
    try {
      setSending(true);

      if (selectedTemplate) {
        const url = `${Config.apiUrl}/whatsapp-templates`;
        const body = JSON.stringify({
          from: {
            type: "whatsapp",
            number: "447418342132"
          },
          to: {
            type: "whatsapp",
            number: "6585773051"
          },
          content: {
            type: "custom",
            custom: {
              type: "template",
              template: {
                namespace: "whatsapp:hsm:technology:nexmo",
                name: "airline_ticket_update",
                language: {
                  policy: "deterministic",
                  code: "en"
                },
                components: [
                  {
                    type: "header",
                    parameters: [{
                      type: "document",
                      document: {
                        link: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                      }
                    }]
                  },
                  {
                    type: "body",
                    parameters: [
                      {
                        type: "text",
                        text: "Frans Siswanto"
                      },
                      {
                        type: "text",
                        text: "GA 123"
                      },
                      {
                        type: "text",
                        text: "Surabaya"
                      },
                      {
                        type: "text",
                        text: "Singapore"
                      }
                    ]
                  }
                ]
              }
            }
          }
        })

        await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  }

  return (
    <button
      className="Vlt-btn Vlt-btn--primary Vlt-btn--app"
      onClick={handleSendMessageClick}
      disabled={sending}
    >
      Send Templated Message
    </button>
  )
}

export default SendMessageButton;
