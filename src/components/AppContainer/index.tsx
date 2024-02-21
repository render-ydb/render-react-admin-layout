import { FC } from "react";
import styles from "./index.module.less";

interface Props {
  children?: React.ReactNode;
  appHeaderFixedVisible: boolean;
  appHeaderVisible: boolean;
  appMenuMode: string;
}

const AppContainer: FC<Props> = (props) => {
  const { children, appHeaderFixedVisible, appHeaderVisible, appMenuMode } =
    props;

  const containerClassName =
    (appHeaderFixedVisible && appHeaderVisible) || appMenuMode === "blend-menu"
      ? `${styles.root} ${styles.mt79}`
      : styles.root;
  return <main className={containerClassName}>{children}</main>;
};
export default AppContainer;
