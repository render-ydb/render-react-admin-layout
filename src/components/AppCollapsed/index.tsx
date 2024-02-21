import { FC } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";

import styles from "./index.module.less";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};


interface Props {
  collapsed: boolean;
  theme: string;
  toggleCollapsed: (collapsed: boolean) => void;
}

const AppCollapsed: FC<Props> = props => {
  const { theme, collapsed, toggleCollapsed } = props;
  const handleClick = () => {
    toggleCollapsed(!collapsed);
  };
  const items: MenuItem[] = [
    getItem(null, "", collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />),

  ];
  return (
    <div
      className={styles.root}
      style={{
        borderColor: theme !== "light-menu-style" ? "rgba(0,0,0,0.25)" : "#f0f0f0",
      }}
    >
      <Menu
        mode="inline"
        theme={theme !== "light-menu-style" ? "dark" : "light"}
        onClick={handleClick}
        selectable={false}
        items={items}
        inlineCollapsed={collapsed}
      />

    </div>
  );
};
export default AppCollapsed;
