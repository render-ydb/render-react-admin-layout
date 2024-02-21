import { FC, Reducer, useCallback, useEffect, useReducer } from "react";
import { Drawer, Button, message, ConfigProvider } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import AppMenu from "./components/AppMenu";
import AppBody from "./components/AppBody";
import AppStyleSetting from "./components/AppStyleSetting";
import AppOverallStyle from "./components/AppOverallStyle";
import AppSettingDivider from "./components/AppSettingDivider";
import AppThemeColor from "./components/AppThemeColor";
import AppNavStyle from "./components/AppNavStyle";
import AppContentStyle from "./components/AppContentStyle";
import AppOtherStyle from "./components/AppOtherStyle";
import styles from "./index.module.less";
import { throttle } from "./utils/utils";

const SET_COLLAPSED = "SET_COLLAPSED";
const SET_RIGHT_DRAWER = "SET_RIGHT_DRAWER";
const SET_APP_OVERALL_STYLE = "SET_APP_OVERALL_STYLE";
const SET_THEME_COLOR = "SET_THEME_COLOR";
const SET_COLOR_WEAK_MODE = "SET_COLOR_WEAK_MODE";
const SET_APP_FOOTER_VISIBLE = "SET_APP_FOOTER_VISIBLE";
const SET_APP_HEADER_VISIBLE = "SET_APP_HEADER_VISIBLE";
const SET_APP_HEADER_FIXED_VISIBLE = "SET_APP_HEADER_FIXED_VISIBLE";
const SET_APP_MENU_VISIBLE = "SET_APP_MENU_VISIBLE";
const SET_APP_LOGO_VISIBLE = "SET_APP_LOGO_VISIBLE";
const SET_APP_MENU_MODE = "SET_APP_MENU_MODE";

const [MAX_WIDTH, MIN_WIDHT] = [990, 770];

const DEFAULT_STATE = {
  themeColor: "rgb(24, 144, 255)",
  collapsed: false,
  rightVisible: false,
  appOverallStyle: "light-menu-style",
  colorWeakVisible: false,
  appFooterVisible: true,
  appHeaderVisible: true,
  appHeaderFixedVisible: true,
  appMenuVisible: true,
  appLogoVisible: true,
  appMenuMode: "slide-menu",
};

interface AppState {
  // 主题颜色
  themeColor: string;
  // inlien模式下是否收起菜单
  collapsed: boolean;
  // 应用风格菜单是否出现
  rightVisible: boolean;
  // 应用整体风格设置
  appOverallStyle: string;
  // 色弱模式开关
  colorWeakVisible: boolean;
  // 应用页脚显示开关
  appFooterVisible: boolean;
  // 应用头部显示开关
  appHeaderVisible: boolean;
  // 是否固定Header
  appHeaderFixedVisible: boolean;
  // 是否显示左侧菜单
  appMenuVisible: boolean;
  // 是否显示应用logo
  appLogoVisible: boolean;
  // 菜单显示风格
  appMenuMode: string;
}

interface AppAction {
  type: string;
  payload?: any;
}

const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case SET_COLLAPSED:
      return { ...state, collapsed: action.payload };
    case SET_RIGHT_DRAWER:
      return { ...state, rightVisible: action.payload };
    case SET_APP_OVERALL_STYLE:
      return { ...state, appOverallStyle: action.payload };
    case SET_THEME_COLOR:
      return { ...state, themeColor: action.payload };
    case SET_COLOR_WEAK_MODE:
      return { ...state, colorWeakVisible: action.payload };
    case SET_APP_FOOTER_VISIBLE:
      return { ...state, appFooterVisible: action.payload };
    case SET_APP_HEADER_VISIBLE:
      return { ...state, appHeaderVisible: action.payload };
    case SET_APP_HEADER_FIXED_VISIBLE:
      return { ...state, appHeaderFixedVisible: action.payload };
    case SET_APP_MENU_VISIBLE:
      return { ...state, appMenuVisible: action.payload };
    case SET_APP_LOGO_VISIBLE:
      return { ...state, appLogoVisible: action.payload };
    case SET_APP_MENU_MODE:
      return { ...state, appMenuMode: action.payload };
    default:
      throw new Error();
  }
};

interface Props {
  menuItemClick: MenuItemClick;
  menuItems?: IMenuItem[];
  children?: React.ReactNode;
  renderMenu?: () => JSX.Element;
  title?: string;
  logoUrl?: string;
  themeColorChange?: (color: string) => void;
}

const AppLayout: FC<Props> = (props) => {
  let localAppState = null;
  try {
    const appState = window.localStorage.getItem("render-app-style") || "";
    localAppState = JSON.parse(appState);
    localAppState = { ...localAppState, rightVisible: false };
  } catch (error) {
    localAppState = DEFAULT_STATE;
    console.warn("读取layout布局状态失败，使用默认布局");
  }

  const {
    themeColorChange,
    menuItemClick,
    menuItems,
    children,
    renderMenu,
    title,
    logoUrl,
  } = props;

  const [appState, dispatch] = useReducer<Reducer<AppState, AppAction>>(
    reducer,
    localAppState,
  );

  const {
    collapsed,
    rightVisible,
    appOverallStyle,
    themeColor,
    colorWeakVisible,
    appFooterVisible,
    appHeaderVisible,
    appHeaderFixedVisible,
    appMenuVisible,
    appLogoVisible,
    appMenuMode,
  } = appState;

  const [messageApi, contextHolder] = message.useMessage();

  // 设置默认主题色
  useEffect(() => {
    togglehemeColor(themeColor);
  }, []);

  const handleResize = throttle(() => {
    const windowW = window.innerWidth;
    if (MIN_WIDHT <= windowW && windowW <= MAX_WIDTH) {
      toggleCollapsed(true);
      toggleAppMenuVisible(true);
    } else if (windowW > MAX_WIDTH) {
      toggleCollapsed(false);
      toggleAppMenuVisible(true);
    } else if (windowW < MIN_WIDHT) {
      toggleAppMenuVisible(false);
    }
  });
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCollapsed = useCallback((visible: boolean) => {
    dispatch({ type: SET_COLLAPSED, payload: visible });
  }, []);

  const toggleRightDrawer = useCallback((visible: boolean) => {
    dispatch({ type: SET_RIGHT_DRAWER, payload: visible });
  }, []);

  const toggleAppOverallStyle = useCallback((style: string) => {
    dispatch({ type: SET_APP_OVERALL_STYLE, payload: style });
  }, []);

  const togglehemeColor = useCallback((color: string) => {
    themeColorChange && themeColorChange(color);
    dispatch({ type: SET_THEME_COLOR, payload: color });
  }, []);

  const toggleAppMenuMode = useCallback((mode: string) => {
    dispatch({ type: SET_APP_MENU_MODE, payload: mode });
  }, []);

  const toggleAppHeaderFixedVisible = useCallback((visible: boolean) => {
    dispatch({ type: SET_APP_HEADER_FIXED_VISIBLE, payload: visible });
  }, []);

  const toggleAppFooterVisible = useCallback((visible: boolean) => {
    dispatch({ type: SET_APP_FOOTER_VISIBLE, payload: visible });
  }, []);

  const toggleAppHeaderVisible = useCallback((visible: boolean) => {
    dispatch({ type: SET_APP_HEADER_VISIBLE, payload: visible });
  }, []);

  const toggleAppMenuVisible = useCallback((visible: boolean) => {
    dispatch({ type: SET_APP_MENU_VISIBLE, payload: visible });
  }, []);

  const toggleAppLogoVisible = useCallback((visible: boolean) => {
    dispatch({ type: SET_APP_LOGO_VISIBLE, payload: visible });
  }, []);

  const toggleColorWeakMode = useCallback((mode: boolean) => {
    dispatch({ type: SET_COLOR_WEAK_MODE, payload: mode });
  }, []);

  const onClose = () => {
    toggleRightDrawer(false);
  };

  const handleSaveBtn = () => {
    window.localStorage.setItem("render-app-style", JSON.stringify(appState));
    messageApi.open({
      type: "success",
      content: "系统配置保存成功",
    });
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: themeColor,
        },
      }}
    >
      <div className={styles.root}>
        <AppMenu
          menuItemClick={menuItemClick}
          menuItems={menuItems}
          title={title}
          logoUrl={logoUrl}
          theme={appOverallStyle}
          collapsed={collapsed}
          toggleCollapsed={toggleCollapsed}
          appLogoVisible={appLogoVisible}
          appMenuVisible={appMenuVisible}
          appMenuMode={appMenuMode}
        />
        <AppBody
          logoUrl={logoUrl}
          menuItemClick={menuItemClick}
          menuItems={menuItems}
          title={title}
          renderMenu={renderMenu}
          appFooterVisible={appFooterVisible}
          appHeaderVisible={appHeaderVisible}
          appHeaderFixedVisible={appHeaderFixedVisible}
          appOverallStyle={appOverallStyle}
          collapsed={collapsed}
          appMenuMode={appMenuMode}
          appMenuVisible={appMenuVisible}
          appLogoVisible={appLogoVisible}
        >
          {children}
        </AppBody>
        <AppStyleSetting
          setRightDrawer={toggleRightDrawer}
          rightVisible={rightVisible}
        />
        <Drawer
          title="应用风格设置"
          placement="right"
          closable
          width={300}
          onClose={onClose}
          open={rightVisible}
        >
          <AppOverallStyle
            appOverallStyle={appOverallStyle}
            setAppOverallStyle={toggleAppOverallStyle}
          />
          <AppSettingDivider />
          <AppThemeColor
            themeColor={themeColor}
            setThemeColor={togglehemeColor}
          />
          <AppSettingDivider />
          <AppNavStyle
            appMenuMode={appMenuMode}
            setAppMenuMode={toggleAppMenuMode}
            appHeaderFixedVisible={appHeaderFixedVisible}
            setAppHeaderFixedVisible={toggleAppHeaderFixedVisible}
          />
          <AppSettingDivider />
          <AppContentStyle
            appFooterVisible={appFooterVisible}
            setAppFooterVisible={toggleAppFooterVisible}
            appHeaderVisible={appHeaderVisible}
            setAppHeaderVisible={toggleAppHeaderVisible}
            appMenuVisible={appMenuVisible}
            setAppMenuVisible={toggleAppMenuVisible}
            appLogoVisible={appLogoVisible}
            setAppLogoVisible={toggleAppLogoVisible}
            appMenuMode={appMenuMode}
          />
          <AppSettingDivider />
          <AppOtherStyle
            colorWeakVisible={colorWeakVisible}
            setColorWeakMode={toggleColorWeakMode}
          />

          {contextHolder}
          <Button onClick={handleSaveBtn} icon={<SaveOutlined />} block>
            保存配置
          </Button>
        </Drawer>
      </div>
    </ConfigProvider>
  );
};

export default AppLayout;
