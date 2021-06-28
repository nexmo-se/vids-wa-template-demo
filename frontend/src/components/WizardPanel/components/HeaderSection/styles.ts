import { makeStyles } from "@material-ui/core";

export default makeStyles(
  (theme) => ({
    locationContainer: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: theme.spacing(2)
    }
  }),
  { index: 1 }
)