import SelectTemplateSection from "./components/SelectTemplateSection";
import SendToSection from "./components/SendToSection";
import HeaderSection from "./components/HeaderSection";
import BodySection from "./components/BodySection";
import { Grid } from "@material-ui/core";

function WizardPanel() {
  return (
    <Grid spacing={2} container>
      <Grid
        xs={12}
        spacing={2}
        alignItems="stretch"
        container
        item
      >
        <Grid xs={6} item>
          <SendToSection />
        </Grid>
        <Grid xs={6} item>
          <SelectTemplateSection />
        </Grid>
      </Grid>

      <Grid xs={12} item>
        <HeaderSection />
      </Grid>

      <Grid xs={12} item>
        <BodySection />
      </Grid>
    </Grid>
  )
}

export default WizardPanel;
