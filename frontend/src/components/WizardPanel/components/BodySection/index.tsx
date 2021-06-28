import useStyles from "./styles";
import { Box } from "@material-ui/core";

function BodySection () {
  const mStyles = useStyles();

  return (
    <Box
      height={1}
      className="Vlt-card Vlt-card--border Vlt-bg-white"
    >
      <Box className="Vlt-card__header">
        <h5>Body</h5>
        <p>
          Enter the text for your message in the language you've selected.
        </p>
      </Box>
      <Box className="Vlt-card__content">
        <div className={mStyles.content}>
          <div className="Vlt-form__element Vlt-form__element--elastic">
            <span>Hi&nbsp;</span>
            <div className="Vlt-input">
              <input type="text" size={5} />
            </div>
            <span>, Here is your Boarding Pass for your flight&nbsp;</span>
            <div className="Vlt-input">
              <input type="text" size={5} />
            </div>
            <span>&nbsp;from&nbsp;</span>
            <div className="Vlt-input">
              <input type="text" size={5} />
            </div>
            <span>&nbsp;to&nbsp;</span>
            <div className="Vlt-input">
              <input type="text" size={4} />
            </div>
            <span>.</span>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default BodySection;
