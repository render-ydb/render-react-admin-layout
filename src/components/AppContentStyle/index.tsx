import { FC, memo } from "react";
import styles from "./index.module.less";
import { Switch } from "antd";

interface Props {
  appFooterVisible: boolean;
  setAppFooterVisible: (visible: boolean) => void;
  appHeaderVisible: boolean;
  setAppHeaderVisible: (visible: boolean) => void;
  appMenuVisible: boolean;
  setAppMenuVisible: (visible: boolean) => void;
  appLogoVisible: boolean;
  setAppLogoVisible: (visible: boolean) => void;
  appMenuMode: string;
}

const AppContentStyle: FC<Props> = (props) => {
  const {
    appFooterVisible,
    setAppFooterVisible,
    appHeaderVisible,
    setAppHeaderVisible,
    appMenuVisible,
    setAppMenuVisible,
    appLogoVisible,
    setAppLogoVisible,
    appMenuMode,
  } = props;
  const handleAppFooterChange = (visible: boolean) => {
    setAppFooterVisible(visible);
  };
  const handleAppHeaderChange = (visible: boolean) => {
    setAppHeaderVisible(visible);
  };
  const handleAppMenuChange = (visible: boolean) => {
    setAppMenuVisible(visible);
  };
  const handleAppLogoChange = (visible: boolean) => {
    setAppLogoVisible(visible);
  };
  return (
    <div className={styles.root}>
      <h3>内容区域</h3>
      <ul className={styles["content-setting-list"]}>
        <li className={styles["content-setting-item"]}>
          <span>顶栏</span>
          <div className={styles["content-setting-item-action"]}>
            <Switch
              size="small"
              checked={appHeaderVisible}
              onChange={handleAppHeaderChange}
            />
          </div>
        </li>
        <li className={styles["content-setting-item"]}>
          <span>页脚</span>
          <div className={styles["content-setting-item-action"]}>
            <Switch
              size="small"
              checked={appFooterVisible}
              onChange={handleAppFooterChange}
            />
          </div>
        </li>
        <li className={styles["content-setting-item"]}>
          <span>菜单</span>
          <div className={styles["content-setting-item-action"]}>
            <Switch
              size="small"
              checked={appMenuVisible}
              onChange={handleAppMenuChange}
            />
          </div>
        </li>
        <li className={styles["content-setting-item"]}>
          <span>菜单头</span>
          <div className={styles["content-setting-item-action"]}>
            <Switch
              size="small"
              disabled={appMenuMode === "blend-menu"}
              checked={appLogoVisible}
              onChange={handleAppLogoChange}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(AppContentStyle);
