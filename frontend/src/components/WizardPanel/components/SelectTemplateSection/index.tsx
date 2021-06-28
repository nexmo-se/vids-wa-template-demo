import TemplateDropdown from "../TemplateDropdown";
import { Box } from "@material-ui/core";

function SelectTemplateSection () {
  return (
    <Box
      height={1}
      className="Vlt-card Vlt-card--border Vlt-bg-white"
    >
      <Box className="Vlt-card__header">
        <h5>Select Template</h5>
        <p>
          Please select template to be sent.
        </p>
      </Box>
      <Box className="Vlt-card__content">
        <TemplateDropdown />
      </Box>
    </Box>
  )
}

export default SelectTemplateSection;
