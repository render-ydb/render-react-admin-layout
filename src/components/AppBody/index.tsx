import React, { FC, memo } from "react";
import AppHeader from "../AppHeader";
import AppContainer from "../AppContainer";
import AppFooter from "../AppFooter";
import styles from "./index.module.less";

interface Props {
  logoUrl?: string;
  menuItemClick: MenuItemClick;
  menuItems?: IMenuItem[];
  children?: React.ReactNode;
  title?: string;
  renderMenu?: () => JSX.Element;
  appHeaderVisible: boolean;
  appFooterVisible: boolean;
  appHeaderFixedVisible: boolean;
  appOverallStyle: string;
  collapsed: boolean;
  appMenuVisible: boolean;
  appMenuMode: string;
  appLogoVisible: boolean;
}

const AppBody: FC<Props> = (props) => {
  const {
    logoUrl,
    menuItemClick,
    menuItems = [],
    children,
    title,
    renderMenu,
    appHeaderVisible,
    appFooterVisible,
    appHeaderFixedVisible,
    appOverallStyle,
    collapsed,
    appMenuVisible,
    appMenuMode,
    appLogoVisible,
  } = props;
  return (
    <section className={styles.root}>
      <aside
        className={styles["seat-menu"]}
        style={{
          width:
            !appMenuVisible || appMenuMode === "top-menu"
              ? 0
              : collapsed
                ? 48
                : 208,
        }}
      />
      <section style={{ flex: 1 }}>
        <AppHeader
          logoUrl={logoUrl}
          menuItemClick={menuItemClick}
          menuItems={menuItems}
          title={title}
          renderMenu={renderMenu}
          appHeaderVisible={appHeaderVisible}
          appHeaderFixedVisible={appHeaderFixedVisible}
          appOverallStyle={appOverallStyle}
          appMenuMode={appMenuMode}
          appLogoVisible={appLogoVisible}
        />
        <AppContainer
          appHeaderFixedVisible={appHeaderFixedVisible}
          appHeaderVisible={appHeaderVisible}
          appMenuMode={appMenuMode}
        >
          {children}
        </AppContainer>
        <AppFooter appFooterVisible={appFooterVisible} />
      </section>
    </section>
  );
};

export default memo(AppBody);
