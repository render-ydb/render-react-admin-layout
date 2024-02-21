import { FC } from "react";
import styles from "./index.module.less";

interface Props {
  title?: string;
  collapsed: boolean;
  theme: string;
  logoImg?: string;
}

const AppLogo: FC<Props> = (props) => {
  const { title = "Render", collapsed, theme, logoImg } = props;
  return (
    <div
      className={collapsed ? `${styles.root} ${styles.collapsed}` : styles.root}
      style={{
        borderColor:
          theme !== "light-menu-style" ? "rgba(0,0,0,0.25)" : "#f0f0f0",
      }}
    >
      <a>
        {logoImg && <img src={logoImg} alt="logo" />}
        {!collapsed ? <h1>{title}</h1> : null}
      </a>
    </div>
  );
};
export default AppLogo;
