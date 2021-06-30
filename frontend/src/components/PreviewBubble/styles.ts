import Config from "configs";
import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  previewContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#e5ddd5",
    boxSizing: "border-box",
    height: "100%",
    position: "relative",
    zIndex: 0,
    borderRadius: 8,

    "&::before": {
      background: `url(${Config.publicUrl}/assets/img/preview-background.png)`,
      backgroundSize: "366.5px 666px",
      content: "' '",
      height: "100%",
      left: 0,
      opacity: ".06",
      position: "absolute",
      top: 0,
      width: "100%"
    }
  },
  bubbleContainer: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3)
  },
  chatBubble: {
    backgroundColor: "#fff",
    borderRadius: "7.5px",
    borderTopLeftRadius: 0,
    boxShadow: "0 1px 0.5px rgba(0, 0, 0, .15)",
    minHeight: 20,
    position: "relative",

    "&::after": {
      background: `url(${Config.publicUrl}/assets/img/chat-arrow.png)`,
      backgroundSize: "contain",
      content: "' '",
      height: 19,
      left: -12,
      position: "absolute",
      top: 0,
      width: 12
    }
  },
  bodyContainer: {
    color: "#262626",
    fontSize: 13.6,
    lineHeight: "19px",
    padding: "7px 7px 6px 9px",

    "&::after": {
      content: "''",
      display: "inline-block",
      marginRight: 110
    }
  },
  contentContainer: {
    color: "#282828",
    fontSize: 13.6,
    whiteSpace: "pre-wrap",
    fontFamily: "inherit"
  },
  bodyContent: {
    overflowWrap: "break-word",
    textAlign: "initial"
  },
  mediaContainer: {
    padding: "3px 3px 0px 3px",
  },
  media: {
    backgroundImage: `url(${Config.publicUrl}/assets/img/media-document.png)`,
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
  },
  footer: {
    color: "rgba(0, 0, 0, .45)",
    fontSize: 13,
    lineHeight: "17px",
    padding: "0px 7px 8px 9px",

    "&::after": {
      content: "''",
      display: "inline-block",
      marginRight: 110
    }
  },
  time: {
    bottom: 3,
    color: "rgba(0, 0, 0, .4)",
    fontSize: 11,
    height: 15,
    lineHeight: "15px",
    position: "absolute",
    right: 7
  }
}), { index: 1 })