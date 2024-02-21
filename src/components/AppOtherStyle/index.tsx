import { FC, memo } from "react";
import styles from "./index.module.less";
import { Switch } from "antd";

interface Props {
  colorWeakVisible: boolean;
  setColorWeakMode: (visible: boolean) => void;
}
const AppOtherStyle: FC<Props> = (props) => {
  const { colorWeakVisible, setColorWeakMode } = props;

  const handleChange = (visible: boolean) => {
    if (visible) {
      document.body.classList.add(styles["body-color-weak-mode"]);
    } else {
      document.body.classList.remove(styles["body-color-weak-mode"]);
    }
    setColorWeakMode(visible);
  };
  return (
    <div className={styles.root}>
      <h3>其他设置</h3>
      <ul className={styles["other-setting-list"]}>
        <li className={styles["other-setting-item"]}>
          <span>色弱模式</span>
          <div className={styles["other-setting-item-action"]}>
            <Switch
              size="small"
              checked={colorWeakVisible}
              onChange={handleChange}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(AppOtherStyle);
