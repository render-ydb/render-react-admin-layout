import { FC } from "react";
import styles from "./index.module.less";
import AppHorizontalMenu from "../AppHorizontalMenu";
import AppUser from "./AppUser";
import AppZoom from "./AppZoom";

interface Props {
  logoUrl?: string;
  menuItemClick?: MenuItemClick;
  menuItems: IMenuItem[];
  title?: string;
  renderMenu?: () => JSX.Element;
  appHeaderVisible: boolean;
  appHeaderFixedVisible: boolean;
  appOverallStyle: string;
  appMenuMode: string;
  appLogoVisible: boolean;
}
const AppHeader: FC<Props> = (props) => {
  const {
    logoUrl,
    menuItemClick,
    menuItems,
    title = "Render",
    renderMenu,
    appHeaderVisible,
    appHeaderFixedVisible,
    appOverallStyle,
    appMenuMode,
    appLogoVisible,
  } = props;

  const headerClassName = `${styles.root} ${
    appHeaderFixedVisible ? styles["app-header-fixed"] : ""
  } ${
    appOverallStyle === "dark-app-style" ||
    (appOverallStyle === "dark-menu-style" && appMenuMode === "top-menu")
      ? styles["app-dark-header"]
      : ""
  } ${appMenuMode === "blend-menu" ? styles["app-top-fixed-header"] : ""}`;
  return (
    <>
      {appHeaderVisible ? (
        <header className={headerClassName}>
          {(appLogoVisible && appMenuMode === "top-menu") ||
          appMenuMode === "blend-menu" ? (
            <div className={styles["header-logo-container"]}>
              <div className={styles["header-logo"]}>
                <a>
                  {logoUrl && <img src={logoUrl} alt="" />}
                  <h1>{title}</h1>
                </a>
              </div>
            </div>
            ) : null}

          {appMenuMode === "top-menu" ? (
            <div className={styles["header-menu"]}>
              <AppHorizontalMenu
                menuItemClick={menuItemClick}
                menuItems={menuItems}
                theme={appOverallStyle}
              />
            </div>
          ) : null}
          {appMenuMode === "slide-menu" ? <div /> : null}
          <div className={styles["header-right"]}>
            <AppUser renderMenu={renderMenu} />
            <AppZoom />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default AppHeader;
