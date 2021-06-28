import "react-phone-input-2/lib/bootstrap.css";
import { useTemplate } from "components/TemplateProvider";

import PhoneInput from "react-phone-input-2";
import { Box } from "@material-ui/core";

function SendToSection() {
  const { setTargetPhoneNumber } = useTemplate();

  function handleChange(phone: string) {
    if (!setTargetPhoneNumber) return;
    setTargetPhoneNumber(phone);
  }

  return (
    <Box
      height={1}
      className="Vlt-card Vlt-card--border Vlt-bg-white"
    >
      <Box className="Vlt-card__header">
        <h5>Send to</h5>
        <p>
          Where this templated message to be sent? Please use E.164 format without '+' sign.
        </p>
      </Box>
      <Box className="Vlt-card__content">
        <PhoneInput
          country="sg"
          preferredCountries={["sg", "id", "my", "fr", "uk", "ph", "us", "cn", "ca"]}
          onChange={handleChange}
        />
      </Box>
    </Box>
  )
}

export default SendToSection;
