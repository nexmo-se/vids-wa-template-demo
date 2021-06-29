import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import TextField from "components/TextField";
import { Box } from "@material-ui/core";

function HeaderSection () {
  const { selectedTemplate, updateHeaderUserValue } = useTemplate();
  const mStyles = useStyles();

  function generateInput (type: string) {
    if (!selectedTemplate) return null;
    if (!selectedTemplate.header) return null;

    if (type === "text") {
      return (
        <TextField
          label="Text"
          value={selectedTemplate.header.userValue ?? ""}
          setValue={updateHeaderUserValue}
        />
      )
    } else if (["document", "image", "video"].includes(type)) {
      return (
        <TextField
          label="URL"
          value={selectedTemplate.header.userValue ?? ""}
          setValue={updateHeaderUserValue}
        />
      )
    } else if (type === "location") {
      return (
        <>
          <div className={mStyles.locationContainer}>
            <TextField
              label="Longitude"
              value={selectedTemplate.header.userValue ?? ""}
              setValue={updateHeaderUserValue}
            />
            <TextField
              label="Latitude"
              value={selectedTemplate.header.userValue ?? ""}
              setValue={updateHeaderUserValue}
            />
          </div>
          <TextField
            label="Name"
            value={selectedTemplate.header.userValue ?? ""}
            setValue={updateHeaderUserValue}
          />
          <TextField
            label="Address"
            value={selectedTemplate.header.userValue ?? ""}
            setValue={updateHeaderUserValue}
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
            <p>Media Type: <b>{selectedTemplate.header.value}</b></p>
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
