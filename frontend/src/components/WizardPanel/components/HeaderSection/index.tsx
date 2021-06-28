import useStyles from "./styles";

import TextField from "components/TextField";
import { Box } from "@material-ui/core";

type InputType = "url" | "location" | "text";

function HeaderSection () {
  const mStyles = useStyles();

  function generateInput (type: InputType) {
    if (type === "text") {
      return (
        <TextField
          label="Text"
          value=""
          setValue={() => {}}
        />
      )
    } else if (type === "url") {
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
    }
  }

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
          <p>Media Type: <b>Text</b></p>
        </div>
        <div>
          {generateInput("location")}
        </div>
      </Box>
    </Box>    
  );
}

export default HeaderSection;
