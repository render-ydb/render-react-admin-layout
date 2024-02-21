import { FC, memo } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import AppLogo from "../AppLogo";
import AppCollapsed from "../AppCollapsed";
import styles from "./index.module.less";
import { getItem } from "../../utils/utils";

interface Props {
  menuItemClick?: MenuItemClick;
  menuItems?: IMenuItem[];
  title?: string;
  logoUrl?: string;
  theme: string;
  collapsed: boolean;
  toggleCollapsed: (collapsed: boolean) => void;
  appMenuVisible: boolean;
  appLogoVisible: boolean;
  appMenuMode: string;
}

const AppMenu: FC<Props> = (props) => {
  const {
    menuItemClick,
    menuItems = [],
    title,
    logoUrl,
    theme,
    collapsed,
    toggleCollapsed,
    appMenuVisible,
    appLogoVisible,
    appMenuMode,
  } = props;

  const handleRoute: MenuProps["onClick"] = (menuInfo) => {
    menuItemClick && menuItemClick(menuInfo);
  };

  const items = menuItems.map((item: IMenuItem) => {
    return getItem(item.label, item.key, item.icon, item.children, item.type);
  }) as MenuItem[];

  return (
    <>
      {(appMenuMode === "slide-menu" || appMenuMode === "blend-menu") &&
      appMenuVisible ? (
        <aside
          className={styles.root}
          style={{
            width: collapsed ? 55 : 208,
            backgroundColor: theme !== "light-menu-style" ? "#001529" : "#fff",
          }}
        >
          {appLogoVisible ? (
            <AppLogo
              title={title}
              theme={theme}
              collapsed={collapsed}
              logoImg={logoUrl}
            />
          ) : null}
          <Menu
            // defaultSelectedKeys={['/']}
            // defaultOpenKeys={['/home']}
            mode="inline"
            theme={theme !== "light-menu-style" ? "dark" : "light"}
            style={{ flex: 1 }}
            inlineCollapsed={collapsed}
            onClick={handleRoute}
            items={items}
          />

          <AppCollapsed
            theme={theme}
            toggleCollapsed={toggleCollapsed}
            collapsed={collapsed}
          />
        </aside>
        ) : null}
    </>
  );
};

export default memo(AppMenu);
