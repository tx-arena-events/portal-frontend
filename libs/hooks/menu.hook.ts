import { config } from '../config';
import { filterMenu, filterMenuTree } from '../helpers';
import { useAuth } from './auth.hook';

export function useMenu() {
  const { user } = useAuth();
  const pages = config.ALL_PAGES;

  return {
    main: filterMenuTree(config.MAIN_MENU, pages, user),
    user: filterMenu(config.USER_MENU, pages, user),
    footer: filterMenu(config.FOOTER_MENU, pages, user),
  };
}
