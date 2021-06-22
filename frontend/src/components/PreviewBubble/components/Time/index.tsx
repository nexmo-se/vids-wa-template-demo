import { DateTime } from "luxon";
import useStyles from "./styles";

function Time() {
  const mStyles = useStyles();

  return (
    <time className={mStyles.time}>
      {DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
    </time>
  )
}

export default Time;