import TemplateDropdown from "./components/TemplateDropdown";
import SendToSection from "./components/SendToSection";
import { Grid, Box } from "@material-ui/core";

function WizardPanel() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <SendToSection />
      </Grid>

      <Grid xs={12} item>
        <Box className="Vlt-card Vlt-card--border Vlt-bg-white">
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
      </Grid>
    </Grid>
  )
}

export default WizardPanel;
