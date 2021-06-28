import { useTemplate } from "components/TemplateProvider";

import SelectTemplateSection from "./components/SelectTemplateSection";
import SendToSection from "./components/SendToSection";
import HeaderSection from "./components/HeaderSection";
import BodySection from "./components/BodySection";
import FooterSection from "./components/FooterSection";
import { Grid } from "@material-ui/core";

function WizardPanel() {
  const { selectedTemplate } = useTemplate();

  return (
    <Grid spacing={2} container>
      <Grid xs={6} item>
        <SendToSection />
      </Grid>
      <Grid xs={6} item>
        <SelectTemplateSection />
      </Grid>

      {
        (selectedTemplate && selectedTemplate.header) &&(
          <Grid xs={12} item>
            <HeaderSection />
          </Grid>
        )
      }
      <Grid xs={12} item>
        <BodySection />
      </Grid>

      {
        (selectedTemplate && selectedTemplate.footer) && (
          <Grid xs={12} item>
            <FooterSection />
          </Grid>
        )
      }
    </Grid>
  )
}

export default WizardPanel;
