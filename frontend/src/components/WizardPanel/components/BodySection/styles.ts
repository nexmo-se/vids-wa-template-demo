import { makeStyles } from "@material-ui/core";

export default makeStyles(
  (theme) => ({
    content: {
      padding: theme.spacing(2),
      backgroundColor: "#e5ddd5",
      boxSizing: "border-box",
      borderRadius: 8,
      position: "relative",
      "&::before": {
        background: "url(/assets/img/preview-background.png)",
        backgroundSize: "366.5px 666px",
        content: "' '",
        height: "100%",
        left: 0,
        opacity: ".06",
        position: "absolute",
        top: 0,
        width: "100%"
      }
    }
  }),
  { index: 1 }
)