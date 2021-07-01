import lodash from "lodash";
import { DocumentValue, HeaderUserValue, LocationValue, MediaValue, TextValue } from "components/TemplateProvider/types";

import useStyles from "./styles";
import { useTemplate } from "components/TemplateProvider";

import TextField from "components/TextField";
import { Box } from "@material-ui/core";

function HeaderSection () {
  const { selectedTemplate, updateHeaderUserValue } = useTemplate();
  const mStyles = useStyles();

  function handleHeaderValueChange (key: string, value: string | number) {
    if (!selectedTemplate) return;
    if (!selectedTemplate.header) return;

    const clonnedValue = lodash(selectedTemplate.header.userValue as HeaderUserValue).clone() ?? {}
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
          value={(selectedTemplate.header.userValue as TextValue).text}
          setValue={(value: string) => handleHeaderValueChange("text", value)}
        />
      )
    } else if (["image", "video"].includes(type)) {
      return (
        <TextField
          label="Link"
          value={(selectedTemplate.header.userValue as MediaValue).link}
          setValue={(value: string) => handleHeaderValueChange("link", value)}
        />
      )
    } else if (type === "document") {
      return (
        <div className={mStyles.documentContainer}>
          <TextField
            label="URL"
            value={(selectedTemplate.header.userValue as DocumentValue).link}
            setValue={(value: string) => handleHeaderValueChange("link", value)}
          />
          <TextField
            label="File Name"
            value={(selectedTemplate.header.userValue as DocumentValue).filename}
            setValue={(value: string) => handleHeaderValueChange("filename", value)}
          />
        </div>
      )
    } else if (type === "location") {
      return (
        <>
          <div className={mStyles.locationContainer}>
            <TextField
              label="Longitude"
              value={(selectedTemplate.header.userValue as LocationValue).longitude}
              setValue={(value: string) => handleHeaderValueChange("longitude", value)}
            />
            <TextField
              label="Latitude"
              value={(selectedTemplate.header.userValue as LocationValue).latitude}
              setValue={(value: string) => handleHeaderValueChange("latitude", value)}
            />
          </div>
          <TextField
            label="Name"
            value={(selectedTemplate.header.userValue as LocationValue).name}
            setValue={(value: string) => handleHeaderValueChange("name", value)}
          />
          <TextField
            label="Address"
            value={(selectedTemplate.header.userValue as LocationValue).address}
            setValue={(value: string) => handleHeaderValueChange("address", value)}
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
