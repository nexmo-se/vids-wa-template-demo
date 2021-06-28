import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import TextField from "components/TextField";
import { Box } from "@material-ui/core";

function HeaderSection () {
  const mStyles = useStyles();
  const { selectedTemplate } = useTemplate();

  function generateInput (type: string) {
    if (type === "text") {
      return (
        <TextField
          label="Text"
          value=""
          setValue={() => {}}
        />
      )
    } else if (["document", "image", "video"]) {
      return (
        <TextField
          label="URL"
          value=""
          setValue={() => {}}
        />
      )
    } else if (type === "location") {
      return (
        <>
          <div className={mStyles.locationContainer}>
            <TextField
              label="Longitude"
              value=""
              setValue={() => {}}
            />
            <TextField
              label="Latitude"
              value=""
              setValue={() => {}}
            />
          </div>
          <TextField
            label="Name"
            value=""
            setValue={() => {}}
          />
          <TextField
            label="Address"
            value=""
            setValue={() => {}}
          />
        </>
      )
    } else return null;
  }

  if (!selectedTemplate) return null;
  else if (!selectedTemplate.header) return null;
  else {
    return (
      <Box
        height={1}
        className="Vlt-card Vlt-card--border Vlt-bg-white"
      >
        <Box className="Vlt-card__header">
          <h5>Header</h5>
          <p>Add a title or media for your header.</p>
        </Box>
        <Box className="Vlt-card__content">
          <div>
            <p>Media Type: <b>{selectedTemplate.header.type}</b></p>
          </div>
          <div>
            {generateInput(selectedTemplate.header.value)}
          </div>
        </Box>
      </Box>
    );
  }
}

export default HeaderSection;
