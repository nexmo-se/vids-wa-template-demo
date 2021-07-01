import Config from "configs";
import lodash from "lodash";
import validator from "validator";

import { useEffect, useState } from "react";
import { useVids } from "components/VidsProvider";
import { useTemplate } from "components/TemplateProvider";

function SendMessageButton() {
  const [sending, setSending] = useState<boolean>(false);
  const [isClean, setIsClean] = useState<boolean>(false);
  const { selectedTemplate, targetPhoneNumber } = useTemplate();
  const { sendRequest } = useVids();

  async function handleSendMessageClick() {
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

      await sendRequest(url, {
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

  useEffect(
    () => {
      if (!selectedTemplate) {
        setIsClean(false);
        return;
      }

      const countParameters = selectedTemplate.body.split(/{{\d+}}/g).length - 1;
      if (countParameters === 0) {
        setIsClean(
          targetPhoneNumber !== undefined &&
          validator.isMobilePhone(targetPhoneNumber)
        ) 
      } else {
        const paramatersHasValue = !(lodash(lodash(countParameters).times()).map(
          (_, index) => {
            return { isEmpty: lodash(selectedTemplate.bodyValues[index]).isEmpty() }
          }
        ).find({ isEmpty: true }))
        setIsClean(paramatersHasValue)
      }
    },
    [selectedTemplate, targetPhoneNumber]
  )

  return (
    <button
      className="Vlt-btn Vlt-btn--primary Vlt-btn--app"
      onClick={handleSendMessageClick}
      disabled={sending || !isClean}
    >
      Send Templated Message
    </button>
  )
}

export default SendMessageButton;
