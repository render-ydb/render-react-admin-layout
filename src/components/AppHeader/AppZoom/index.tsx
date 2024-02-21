import { useEffect, useState } from "react";
import styles from "./index.module.less";
import { ExpandOutlined, CompressOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import FullScreen from "../../../utils/fullScreen";

const AppZoom = () => {
  const [isFullscreen, setFullscreen] = useState(false);

  const screenChange = (isFull: boolean) => {
    setFullscreen(isFull);
  };

  useEffect(() => {
    FullScreen.init(screenChange);
  }, []);

  const handleExitFullScreen = () => {
    FullScreen.exitFullScreen();
  };
  const handleRequestFullScreen = () => {
    FullScreen.enterFullScreen();
  };
  return (
    <Tooltip placement="bottom" title={isFullscreen ? "退出全屏" : "进入全屏"}>
      <span
        className={styles.root}
        onClick={isFullscreen ? handleExitFullScreen : handleRequestFullScreen}
      >
        {isFullscreen ? <CompressOutlined /> : <ExpandOutlined />}
      </span>
    </Tooltip>
  );
};

export default AppZoom;
