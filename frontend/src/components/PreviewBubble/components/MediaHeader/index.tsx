import useStyles from "./styles";
import { Box } from "@material-ui/core";

interface IMediaHeader {
  type: "document" | "location" | "video" | "image" | string;
}

function MediaHeader({ type }: IMediaHeader) {
  const mStyles = useStyles({
    mediaType: type
  });

  return (
    <Box className={mStyles.mediaContainer}>
      <Box className={mStyles.media} />
    </Box>
  )
}

export default MediaHeader;
