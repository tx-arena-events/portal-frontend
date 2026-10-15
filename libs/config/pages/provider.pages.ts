import { PAGES, ROLES } from '../../enums';
import { hasPortalRole } from '../../helpers';
import type { IPage } from '../../models';

export const PROVIDER_PAGES: Array<IPage> = [
  {
    name: PAGES.APP_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.APPMANAGEMENT_VIEW),
  },
  {
    name: PAGES.SERVICE_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.SERVICEMANAGEMENT_VIEW),
  },
  {
    // This is the New Route
    name: PAGES.APP_OVERVIEW,
    allowTo: (user) => hasPortalRole(user, ROLES.APPOVERVIEW_VIEW),
  },
  {
    name: PAGES.SERVICE_OVERVIEW,
    allowTo: (user) => hasPortalRole(user, ROLES.SERVICEOVERVIEW_VIEW),
  },
  {
    name: PAGES.APP_RELEASE_PROCESS,
    allowTo: (user) => hasPortalRole(user, ROLES.APPOVERVIEW_VIEW),
  },
  {
    name: PAGES.SERVICE_RELEASE_PROCESS,
    allowTo: (user) => hasPortalRole(user, ROLES.VIEW_SERVICE_RELEASE),
  },
  {
    name: PAGES.APP_SUBSCRIPTION,
    allowTo: (user) => hasPortalRole(user, ROLES.APP_MANAGEMENT),
  },
  {
    name: PAGES.SERVICE_SUBSCRIPTION,
    allowTo: (user) =>
      hasPortalRole(user, ROLES.SERVICE_SUBSCRIPTION_MANAGEMENT),
  },
  {
    name: PAGES.APP_ADMIN_BOARD,
    allowTo: (user) =>
      hasPortalRole(user, [
        ROLES.APPROVE_APP_RELEASE,
        ROLES.DECLINE_APP_RELEASE,
      ]),
  },
  {
    name: PAGES.SERVICE_ADMIN_BOARD,
    allowTo: (user) =>
      hasPortalRole(user, [
        ROLES.APPROVE_SERVICE_RELEASE,
        ROLES.DECLINE_SERVICE_RELEASE,
      ]),
  },
  {
    name: PAGES.APP_ADMIN_BOARD_DETAIL,
    allowTo: (user) =>
      hasPortalRole(user, [
        ROLES.APPROVE_APP_RELEASE,
        ROLES.DECLINE_APP_RELEASE,
      ]),
    param: 'appId',
  },
  {
    name: PAGES.SERVICE_ADMIN_BOARD_DETAIL,
    allowTo: (user) =>
      hasPortalRole(user, [
        ROLES.APPROVE_SERVICE_RELEASE,
        ROLES.DECLINE_SERVICE_RELEASE,
      ]),
    param: 'appId',
  },
  {
    name: PAGES.APP_RELEASE_PROCESS_FORM,
    allowTo: (user) => hasPortalRole(user, ROLES.APPOVERVIEW_VIEW),
    path: `${PAGES.APP_RELEASE_PROCESS}/form`,
  },
  {
    name: PAGES.SERVICE_RELEASE_PROCESS_FORM,
    allowTo: (user) => hasPortalRole(user, ROLES.VIEW_SERVICE_RELEASE),
    path: `${PAGES.SERVICE_RELEASE_PROCESS}/form`,
  },
  {
    name: PAGES.DEACTIVATE,
    param: 'appId',
  },
  {
    name: PAGES.SERVICE_DEACTIVATE,
    param: 'serviceId',
  },
  {
    name: PAGES.CHANGE_IMAGE,
    param: 'appId',
  },
  {
    name: PAGES.CHANGE_DESCRIPTION,
    param: 'appId',
  },
  {
    name: PAGES.ADD_ROLES,
    param: 'appId',
  },
  {
    name: PAGES.CHANGE_DOCUMENTS,
    param: 'appId',
  },
  {
    name: PAGES.VIEW_DETAILS,
    param: 'appId',
  },
  {
    name: PAGES.ROLE_DETAILS,
  },
];
