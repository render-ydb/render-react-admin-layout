// 节流
type Fn = (...args: any) => any | (() => void);
export const throttle = (fn: Fn, delay = 200) => {
  let timer: NodeJS.Timeout | null = null;

  return function () {
    // @ts-ignore
    let that = this;
    var args = Array.prototype.slice.call(arguments);
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(that, args);
        timer = null;
      }, delay);
    }
  };
};

export const getItem = (
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
