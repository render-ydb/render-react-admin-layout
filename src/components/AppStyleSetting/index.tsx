import { FC, memo } from "react";
import { SettingOutlined, CloseOutlined } from "@ant-design/icons";
import styles from "./index.module.less";
import { Button } from "antd";

interface Props {
  rightVisible: boolean;
  setRightDrawer: (rightVisible: boolean) => void;
}

const AppStyleSetting: FC<Props> = (props) => {
  const { rightVisible, setRightDrawer } = props;
  const handleClick = () => {
    setRightDrawer(!rightVisible);
  };
  return (
    <Button
      type="primary"
      icon={rightVisible ? <CloseOutlined /> : <SettingOutlined />}
      className={`${styles.root}  ${
        rightVisible ? styles["right-drawer-open"] : null
      }`}
      onClick={handleClick}
    >
      {/* <span>{rightVisible ? <CloseOutlined /> : <SettingOutlined />}</span> */}
    </Button>
  );
};
export default memo(AppStyleSetting);
