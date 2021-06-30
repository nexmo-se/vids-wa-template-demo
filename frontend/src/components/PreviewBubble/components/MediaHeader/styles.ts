import Config from "configs";
import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  mediaContainer: {
    padding: "3px 3px 0px 3px",
  },
  media: (props: any) => ({
    backgroundImage: `url(${Config.publicUrl}/assets/img/media-${props.mediaType}.png)`,
    backgroundColor: "#ccd0d5",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "80px 88px",
    borderRadius: 4,
    boxSizing: "border-box",
    minWidth: 240,

    "&::after": {
      content: "' '",
      display: "block",
      paddingTop: "calc(100% * (1/1.91))"
    }
  })
}), { index: 1 })