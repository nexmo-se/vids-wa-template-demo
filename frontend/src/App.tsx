import { makeStyles } from "@material-ui/core";

import TemplateProvider from "components/TemplateProvider";
import VidsProvider from "components/VidsProvider";
import Container from "components/Container";
import PreviewBubble from "components/PreviewBubble";
import WizardPanel from "components/WizardPanel";
import SendMessageButton from "components/SendMessageButton";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  }
}), { index: 1 });

function App() {
  const mStyles = useStyles();

  return (
    <VidsProvider>
      <TemplateProvider>
        <Container>
          <Box className={mStyles.header}>
            <h2>
              WhatsApp Media Template Demo
            </h2>
            <SendMessageButton />
          </Box>
          <Grid container>
            <Grid xs={8} item>
              <WizardPanel />
            </Grid>
            <Grid xs={4} item>
              <PreviewBubble />
            </Grid>
          </Grid>
        </Container>
      </TemplateProvider>
    </VidsProvider>
  )
}

export default App;