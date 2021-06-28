import { Box } from "@material-ui/core";
import TextField from "components/TextField";

function FooterSection () {
  return (
    <Box
      height={1}
      className="Vlt-card Vlt-card--border Vlt-bg-white"
    >
      <Box className="Vlt-card__header">
        <h5>Footer</h5>
        <p>
          Add a short line of text to the bottom of your message template.
        </p>
      </Box>
      <Box className="Vlt-card__content">
        <TextField
          InputProps={{
            placeholder: "Enter text here..."
          }}
          value=""
          setValue={() => {}}
        />
      </Box>
    </Box>
  );
}

export default FooterSection;
