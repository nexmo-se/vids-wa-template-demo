import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
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
  }
}), { index: 1 })