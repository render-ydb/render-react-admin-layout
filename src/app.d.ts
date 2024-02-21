declare module "*.less" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare interface Window {
  less: {
    modifyVars: (arg: any) => Promise;
  };
  ActiveXObject: any;
}

type MenuItem = Required<MenuProps>["items"][number];
interface IMenuItem {
  label: React.ReactNode;
  key?: React.Key | null;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: "group";
}

type MenuItemClick = (menuInfo: any) => void;
