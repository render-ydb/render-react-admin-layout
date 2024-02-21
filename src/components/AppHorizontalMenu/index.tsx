import { FC } from "react";
import styles from "./index.module.less";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { getItem } from "../../utils/utils";

interface Props {
  menuItemClick?: MenuItemClick;
  menuItems?: IMenuItem[];
  theme: string;
}
const AppHorizontalMenu: FC<Props> = (props) => {
  const { menuItemClick, theme, menuItems = [] } = props;

  const items = menuItems.map((item: IMenuItem) => {
    return getItem(item.label, item.key, item.icon, item.children, item.type);
  }) as MenuItem[];

  const handleRoute: MenuProps["onClick"] = (menuInfo) => {
    menuItemClick && menuItemClick(menuInfo);
  };
  return (
    <div className={styles.root}>
      <Menu
        onClick={handleRoute}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="horizontal"
        theme={theme !== "light-menu-style" ? "dark" : "light"}
        items={items}
      />
    </div>
  );
};

export default AppHorizontalMenu;
