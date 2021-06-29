import lodash from "lodash";
import { LocationValue } from "components/TemplateProvider/types";

import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import TextField from "components/TextField";
import { Box } from "@material-ui/core";

function HeaderSection () {
  const { selectedTemplate, updateHeaderUserValue } = useTemplate();
  const mStyles = useStyles();

  function handleLocationChange (key: string, value: string) {
    if (!selectedTemplate) return;
    if (!selectedTemplate.header) return;

    const clonnedValue = lodash(selectedTemplate.header.userValue as LocationValue).clone() ?? {}
    const modifiedValue = lodash(clonnedValue).set(key, value).value()
    updateHeaderUserValue(modifiedValue);
  }

  function generateInput (type: string) {
    if (!selectedTemplate) return null;
    if (!selectedTemplate.header) return null;

    if (type === "text") {
      return (
        <TextField
          label="Text"
          value={(selectedTemplate.header.userValue as string) ?? ""}
          setValue={updateHeaderUserValue}
        />
      )
    } else if (["document", "image", "video"].includes(type)) {
      return (
        <TextField
          label="URL"
          value={(selectedTemplate.header.userValue as string) ?? ""}
          setValue={updateHeaderUserValue}
        />
      )
    } else if (type === "location") {
      return (
        <>
          <div className={mStyles.locationContainer}>
            <TextField
              label="Longitude"
              value={(selectedTemplate.header.userValue as LocationValue)?.longitude ?? ""}
              setValue={(value: string) => handleLocationChange("longitude", value)}
            />
            <TextField
              label="Latitude"
              value={(selectedTemplate.header.userValue as LocationValue)?.latitude ?? ""}
              setValue={(value: string) => handleLocationChange("latitude", value)}
            />
          </div>
          <TextField
            label="Name"
            value={(selectedTemplate.header.userValue as LocationValue)?.name ?? ""}
            setValue={(value: string) => handleLocationChange("name", value)}
          />
          <TextField
            label="Address"
            value={(selectedTemplate.header.userValue as LocationValue)?.address ?? ""}
            setValue={(value: string) => handleLocationChange("address", value)}
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
