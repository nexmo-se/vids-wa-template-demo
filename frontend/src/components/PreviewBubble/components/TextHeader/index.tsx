import useStyles from "./styles";
import { Box } from "@material-ui/core";

interface ITextHeader {
  value: string;
}

function TextHeader({ value }: ITextHeader) {
  const mStyles = useStyles();

  return (
    <Box className={mStyles.textContainer}>
      {value}
    </Box>
  )
}

export default TextHeader;
