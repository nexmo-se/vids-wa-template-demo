import Config from "configs";
import lodash from "lodash";

import { useState } from "react";
import { useTemplate } from "components/TemplateProvider";

function SendMessageButton() {
  const [sending, setSending] = useState<boolean>(false);
  const { selectedTemplate, targetPhoneNumber } = useTemplate();

  async function handleSendMessageClick() {
    console.log(selectedTemplate);
    try {
      setSending(true);

      if (!selectedTemplate) return;
      if (!targetPhoneNumber) return;

      const components = lodash([
        selectedTemplate.headerPayload(),
        selectedTemplate.bodyPayload()
      ]).compact().value();
    
      const url = `${Config.apiUrl}/whatsapp-templates`;
      const body = {
        to: {
          type: "whatsapp",
          number: targetPhoneNumber
        },
        content: {
          type: "custom",
          custom: {
            type: "template",
            template: {
              namespace: selectedTemplate.namespace,
              name: selectedTemplate.id,
              language: {
                policy: "deterministic",
                code: "en"
              },
              components
            }
          }
        }
      }

      console.log(JSON.stringify(body, null, 2))

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
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
