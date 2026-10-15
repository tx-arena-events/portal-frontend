import { PAGES, ROLES } from '../../enums';
import { hasBpdmRole, hasPortalRole, hasSemanticHubRole } from '../../helpers';
import type { IPage } from '../../models';

export const MARKETPLACE_PAGES: Array<IPage> = [
  {
    name: PAGES.MARKETPLACE,
    allowTo: (user) => hasPortalRole(user, ROLES.APPSTORE_VIEW),
  },
  {
    name: PAGES.APP_MARKETPLACE,
    allowTo: (user) => hasPortalRole(user, ROLES.APPSTORE_VIEW),
  },
  {
    name: PAGES.SERVICE_MARKETPLACE,
    allowTo: (user) => hasPortalRole(user, ROLES.APPSTORE_VIEW_SERVICES),
  },
  {
    name: PAGES.SERVICE_MARKETPLACE_DETAIL,
    allowTo: (user) => hasPortalRole(user, ROLES.APPSTORE_VIEW_SERVICES),
    param: 'serviceId',
  },
  {
    name: PAGES.APP_DETAIL,
    allowTo: (user) => hasPortalRole(user, ROLES.APPSTORE_VIEW),
    param: 'appId',
    props: { navigate: PAGES.MARKETPLACE },
  },
  {
    name: PAGES.SERVICE_DETAIL,
    param: 'serviceId',
  },
  {
    name: PAGES.DATA_MANAGEMENT,
    allowTo: (user) => hasSemanticHubRole(user, ROLES.SEMANTICHUB_VIEW),
  },
  {
    name: PAGES.SEMANTICHUB,
    allowTo: (user) => hasSemanticHubRole(user, ROLES.SEMANTICHUB_VIEW),
    param: 'modelId',
  },
  {
    name: PAGES.PARTNER_NETWORK,
    allowTo: (user) => hasBpdmRole(user, ROLES.READ_PARTNER_MEMBER),
  },
];
