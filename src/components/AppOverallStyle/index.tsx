import { FC, memo } from "react";
import styles from "./index.module.less";
import { CheckOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

interface Props {
  appOverallStyle: string;
  setAppOverallStyle: (overallStyle: string) => void;
}

const AppOverallStyle: FC<Props> = (props) => {
  const { appOverallStyle, setAppOverallStyle } = props;
  const handleClick = (overallStyle: string) => {
    setAppOverallStyle(overallStyle);
  };
  return (
    <div className={styles.root}>
      <h3>整体风格设置</h3>
      <div className={styles.container}>
        <Tooltip placement="top" title="亮色菜单风格">
          <div
            className={styles["overall-style-item"]}
            onClick={() => handleClick("light-menu-style")}
          >
            <div
              style={
                appOverallStyle === "light-menu-style"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="暗色菜单风格">
          <div
            className={`${styles["overall-style-item"]} ${styles["dark-menu-style"]}`}
            onClick={() => handleClick("dark-menu-style")}
          >
            <div
              style={
                appOverallStyle === "dark-menu-style"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
        <Tooltip placement="top" title="暗色系统风格">
          <div
            className={`${styles["overall-style-item"]} ${styles["dark-app-style"]}`}
            onClick={() => handleClick("dark-app-style")}
          >
            <div
              style={
                appOverallStyle === "dark-app-style"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <CheckOutlined className={styles["check-icon-color"]} />
            </div>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default memo(AppOverallStyle);
