export type MenuItemData = {
  title: string;
  to?: string;
  href?: string;
  hint?: string;
  disable?: boolean;
  children?: Array<MenuItemData>;
};
