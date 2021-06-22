import clsx from "clsx";
import useStyles from "./styles";

interface IContainer {
  children: any;
}

function Container({ children }: IContainer) {
  const mStyles = useStyles();

  return (
    <section
      className={clsx(
        mStyles.container,
        "Vlt-container"
      )}
    >
      {children}
    </section>
  )
}

export default Container;
