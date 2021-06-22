import useStyles from "./styles";
import { Box } from "@material-ui/core";

interface IFooter {
  value: string;
}

function Footer({ value }: IFooter) {
  const mStyles = useStyles();
  
  return (
    <Box className={mStyles.footer}>
      {value}
    </Box>
  )
}

export default Footer;
