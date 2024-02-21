import { FC, memo } from "react";
import styles from "./index.module.less";
import { CheckOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";

const APP_THEME_COLORS = [
  {
    id: 1,
    text: "拂晓蓝（默认）",
    color: "rgb(24, 144, 255)",
  },
  {
    id: 2,
    text: "薄暮",
    color: "rgb(245, 34, 45)",
  },
  {
    id: 3,
    text: "火山",
    color: "rgb(250, 84, 28)",
  },
  {
    id: 4,
    text: "日暮",
    color: "rgb(250, 173, 20)",
  },
  {
    id: 5,
    text: "明青",
    color: "rgb(19, 194, 194)",
  },
  {
    id: 6,
    text: "极光绿",
    color: "rgb(82, 196, 26)",
  },
  {
    id: 7,
    text: "极客蓝",
    color: "rgb(47, 84, 235)",
  },
  {
    id: 8,
    text: "酱紫",
    color: "rgb(114, 46, 209)",
  },
];

interface Props {
  themeColor: string;
  setThemeColor: (color: string) => void;
}

const AppThemeColor: FC<Props> = (props) => {
  const { setThemeColor, themeColor } = props;
  const handleClick = (color: string) => {
    setThemeColor(color);
  };
  return (
    <div className={styles.root}>
      <h3>应用主题色</h3>
      <div className={styles.container}>
        {APP_THEME_COLORS.map((item) => (
          <Tooltip placement="top" title={item.text} key={item.id}>
            <div
              className={styles["app-theme-item"]}
              onClick={() => handleClick(item.color)}
              style={{ backgroundColor: item.color }}
            >
              <div
                style={
                  themeColor === item.color
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <CheckOutlined />
              </div>
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
export default memo(AppThemeColor);
