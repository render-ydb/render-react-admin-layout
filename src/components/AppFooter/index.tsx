import { FC } from "react";
import styles from "./index.module.less";

interface Props {
  appFooterVisible: boolean;
}

const AppFooter: FC<Props> = (props) => {
  const { appFooterVisible } = props;
  if (!appFooterVisible) {
    return null;
  }
  return (
    <footer>
      <div className={styles.root}>Copyright &copy; 2023 render出品</div>
    </footer>
  );
};

export default AppFooter;
