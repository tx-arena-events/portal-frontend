import { PAGES, ROLES } from '../../enums';
import { hasPortalRole, hasSsiRole } from '../../helpers';
import type { IPage } from '../../models';

export const ADMINISTRATION_PAGES: Array<IPage> = [
  {
    name: PAGES.CONNECTOR,
    allowTo: (user) => hasPortalRole(user, ROLES.CONNECTOR_SETUP),
  },
  {
    name: PAGES.ACCOUNT,
    allowTo: (user) => hasPortalRole(user, ROLES.MY_ACCOUNT),
  },
  {
    name: PAGES.NOTIFICATIONS,
    allowTo: (user) => hasPortalRole(user, ROLES.NOTIFICATION_VIEW),
  },
  {
    name: PAGES.ORGANIZATION,
    allowTo: (user) => hasPortalRole(user, ROLES.MY_ORGANIZATION_VIEW),
  },
  {
    name: PAGES.USER_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.USERMANAGEMENT_VIEW),
  },
  {
    name: PAGES.USER_DETAILS,
    allowTo: (user) => hasPortalRole(user, ROLES.VIEW_USER_ACCOUNT),
    param: 'userId',
  },
  {
    name: PAGES.TECH_USER_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.TECH_USER_VIEW),
  },
  {
    name: PAGES.TECH_USER_DETAILS,
    allowTo: (user) => hasPortalRole(user, ROLES.TECH_USER_VIEW),
    param: 'userId',
  },
  {
    name: PAGES.APP_USER_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.USERMANAGEMENT_VIEW),
    param: 'appId',
  },
  {
    name: PAGES.IDP_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.IDP_VIEW),
  },
  {
    name: PAGES.INVITE,
    allowTo: (user) => hasPortalRole(user, ROLES.INVITE_NEW_PARTNER),
  },
  {
    name: PAGES.CLEARINGHOUSE_SELF_DESCRIPTION,
    allowTo: (user) => hasPortalRole(user, ROLES.APPROVE_NEW_PARTNER),
  },
  {
    name: PAGES.CONNECTOR_MANAGEMENT,
    allowTo: (user) => hasPortalRole(user, ROLES.CONNECTORS_VIEW),
  },
  // The below code which refers to "technicalsetup" page should get removed again with 24.12 since we expect that all users which are using bookmarks have switched to the new page.
  // Refactor just implements this Code as it is
  {
    name: PAGES.TECHNICAL_SETUP,
    allowTo: (user) => hasPortalRole(user, ROLES.CONNECTORS_VIEW),
    props: {
      redirect: PAGES.CONNECTOR_MANAGEMENT,
    },
  },
  {
    name: PAGES.APPLICATION_REQUESTS,
    allowTo: (user) => hasPortalRole(user, ROLES.SUBMITTED_APPLICATION),
  },
  {
    name: PAGES.CERTIFICATE_CREDENTIAL,
    allowTo: (user) => hasPortalRole(user, ROLES.REQUEST_SSICREDENTIAL),
  },
  {
    name: PAGES.COMPANY_ROLE,
    allowTo: (user) => hasPortalRole(user, ROLES.UPDATE_COMPANY_ROLE),
  },
  {
    name: PAGES.USECASE_PARTICIPATION,
    allowTo: (user) => hasPortalRole(user, ROLES.REQUEST_SSICREDENTIAL),
  },
  {
    name: PAGES.ADMIN_CREDENTIAL,
    allowTo: (user) => hasSsiRole(user, ROLES.REQUEST_SSICREDENTIAL),
  },
  {
    name: PAGES.COMPANY_CERTIFICATE,
    allowTo: (user) => hasPortalRole(user, ROLES.COMPANY_CERTIFICATE_VIEW),
  },
  {
    name: PAGES.COMPANY_WALLET,
    allowTo: (user) => hasSsiRole(user, ROLES.COMPANY_CERTIFICATE_VIEW),
  },
  {
    name: PAGES.COMPANY_SUBSCRIPTIONS,
    allowTo: (user) => hasPortalRole(user, ROLES.VIEW_SUBSCRIPTION),
  },
  {
    name: PAGES.COMPANY_SUBSCRIPTIONS_DETAIL,
    allowTo: (user) => hasPortalRole(user, ROLES.VIEW_SUBSCRIPTION),
    param: 'appId',
  },
  {
    name: PAGES.COMPANY_DATA,
    allowTo: (user) => hasPortalRole(user, ROLES.MY_ORGANIZATION_VIEW),
  },
  {
    name: PAGES.ONBOARDING_SERVICE_PROVIDER_MANAGEMENT,
    allowTo: (user) =>
      hasPortalRole(user, ROLES.CONFIGURE_PARTNER_REGISTRATION),
  },
];
