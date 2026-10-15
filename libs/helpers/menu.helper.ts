import type { PAGES } from '../enums';
import type { IPage, IUser, Tree } from '../models';

// A menu entry is visible when its page is registered and the user may open it.
export function canAccessPage(
  name: PAGES,
  pages: Array<IPage>,
  user: IUser,
): boolean {
  const page = pages.find((item) => item.name === name);
  if (!page) return false;
  return page.allowTo?.(user) ?? true;
}

export function filterMenu(
  menu: Array<PAGES>,
  pages: Array<IPage>,
  user: IUser,
): Array<PAGES> {
  return menu.filter((name) => canAccessPage(name, pages, user));
}

export function filterMenuTree(
  tree: Array<Tree>,
  pages: Array<IPage>,
  user: IUser,
): Array<Tree> {
  return tree
    .filter((item) => canAccessPage(item.name, pages, user))
    .map((item) => ({
      ...item,
      children: item.children && filterMenuTree(item.children, pages, user),
    }));
}
