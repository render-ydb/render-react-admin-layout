import { FC, memo } from "react";
import styles from "./index.module.less";
import { CheckOutlined } from "@ant-design/icons";
import { Tooltip, Switch } from "antd";

interface Props {
  appHeaderFixedVisible: boolean;
  setAppHeaderFixedVisible: (visible: boolean) => void;
  appMenuMode: string;
  setAppMenuMode: (menuMode: string) => void;
}

const AppNavStyle: FC<Props> = (props) => {
  const {
    appHeaderFixedVisible,
    setAppHeaderFixedVisible,
    appMenuMode,
    setAppMenuMode,
  } = props;
  const handleClick = (menuMode: string) => {
    setAppMenuMode(menuMode);
  };
  const handleAppHeaderFixed = (visible: boolean) => {
    setAppHeaderFixedVisible(visible);
  };
  return (
    <div className={styles.root}>
      <h3>应用导航模式</h3>
      <div className={styles.container}>
        <Tooltip placement="top" title="侧边菜单布局">
          <div
            className={`${styles["nav-style-item"]} ${styles["slide-menu-style"]}`}
            onClick={() => {
              handleClick("slide-menu");
            }}
          >
            <div
              style={
                appMenuMode === "slide-menu"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="顶部菜单布局">
          <div
            className={`${styles["nav-style-item"]} ${styles["top-menu-style"]}`}
            onClick={() => {
              handleClick("top-menu");
            }}
          >
            <div
              style={
                appMenuMode === "top-menu"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="混合菜单布局">
          <div
            className={`${styles["nav-style-item"]} ${styles["blend-menu-style"]}`}
            onClick={() => handleClick("blend-menu")}
          >
            <div
              style={
                appMenuMode === "blend-menu"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
      </div>
      <ul className={styles["nav-setting-list"]}>
        <li className={styles["nav-setting-item"]}>
          <span>固定Header</span>
          <div className={styles["nav-setting-item-action"]}>
            <Switch
              size="small"
              checked={appHeaderFixedVisible}
              onChange={handleAppHeaderFixed}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(AppNavStyle);
