import Config from "configs";

import { useState } from "react";
import { useTemplate } from "components/TemplateProvider";

function SendMessageButton() {
  const [sending, setSending] = useState<boolean>(false);
  const { selectedTemplate, targetPhoneNumber } = useTemplate();

  async function handleSendMessageClick() {
    try {
      setSending(true);

      if (!selectedTemplate) return;
      if (!targetPhoneNumber) return;
    
      const url = `${Config.apiUrl}/whatsapp-templates`;
      const body = JSON.stringify({
        from: {
          type: "whatsapp",
          number: "447418342132"
        },
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
              components: [
                selectedTemplate.headerPayload(),
                selectedTemplate.bodyPayload()
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
