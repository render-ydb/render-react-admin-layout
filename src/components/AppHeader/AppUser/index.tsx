import { FC } from "react";
import styles from "./index.module.less";

interface UserInfo {
  renderMenu?: () => JSX.Element;
}

const AppUser: FC<UserInfo> = (props) => {
  const { renderMenu } = props;
  return <span className={styles.root}>{renderMenu && renderMenu()}</span>;
};

export default AppUser;
