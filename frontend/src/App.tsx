import { makeStyles } from "@material-ui/core";

import TemplateProvider from "components/TemplateProvider";
import Container from "components/Container";
import PreviewBubble from "components/PreviewBubble";
import WizardPanel from "components/WizardPanel";
import SendMessageButton from "components/SendMessageButton";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    overflowY: "auto"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  }
}), { index: 1 });

function App() {
  const mStyles = useStyles();

  return (
    <TemplateProvider>
      <Container>
        <Box className={mStyles.header}>
          <h2>
            WhatsApp Media Template Demo
          </h2>
          <SendMessageButton />
        </Box>
        <Grid className={mStyles.mainContainer} container>
          <Grid xs={8} item>
            <WizardPanel />
          </Grid>
          <Grid xs={4} item>
            <PreviewBubble />
          </Grid>
        </Grid>
      </Container>
    </TemplateProvider>
  )
}

export default App;