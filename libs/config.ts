import AppGerman from './locale/de/app.json';
import AppEnglish from './locale/en/app.json';
import FooterGerman from './locale/de/footer.json';
import FooterEnglish from './locale/en/footer.json';
import HintsGerman from './locale/de/hints.json';
import HintsEnglish from './locale/en/hints.json';
import PagesGerman from './locale/de/pages.json';
import PagesEnglish from './locale/en/pages.json';
import { HINTS, PAGES, ROLES } from './enums';
import { type IConfig } from './models';
import {
  hasBpdmRole,
  hasPortalRole,
  hasRegistrationRole,
  hasSemanticHubRole,
  hasSsiRole,
} from './helpers';

export const config: IConfig = {
  languages: ['en', 'de'],
  fallbackLng: 'en',
  languageResources: {
    de: {
      app: {
        ...AppGerman,
      },
      footer: {
        ...FooterGerman,
      },
      hints: {
        ...HintsGerman,
      },
      pages: {
        ...PagesGerman,
      },
    },
    en: {
      app: {
        ...AppEnglish,
      },
      footer: {
        ...FooterEnglish,
      },
      hints: {
        ...HintsEnglish,
      },
      pages: {
        ...PagesEnglish,
      },
    },
  },
  LOGO_URL: '/logo.svg',
  ALL_PAGES: [
    { name: PAGES.ROOT },
    { name: PAGES.HOME },
    {
      name: PAGES.REGISTRATION,
      allowTo: (user) => hasRegistrationRole(user, ROLES.VIEW_REGISTRATION),
      props: {
        redirect: PAGES.REGISTRATION,
      },
    },
    {
      name: PAGES.HELP,
      props: { redirect: PAGES.DOCUMENTATION, tab: 'documentation' },
    },
    {
      name: PAGES.DOCUMENTATION,
      props: { redirect: PAGES.DOCUMENTATION, tab: 'documentation' },
    },
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
      name: PAGES.DATA_MANAGEMENT,
      allowTo: (user) => hasSemanticHubRole(user, ROLES.SEMANTICHUB_VIEW),
    },
    {
      name: PAGES.SEMANTICHUB,
      allowTo: (user) => hasSemanticHubRole(user, ROLES.SEMANTICHUB_VIEW),
      param: 'modelId',
    },
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
      name: PAGES.PARTNER_NETWORK,
      allowTo: (user) => hasBpdmRole(user, ROLES.READ_PARTNER_MEMBER),
    },
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
      name: PAGES.CONTACT,
    },
    {
      name: PAGES.IMPRINT,
    },
    {
      name: PAGES.PRIVACY,
    },
    {
      name: PAGES.TERMS,
    },
    {
      name: PAGES.TEST,
    },
    {
      name: PAGES.COOKIE_POLICY,
    },
    {
      name: PAGES.ABOUTPAGE,
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
      name: PAGES.LOGOUT,
    },
    {
      name: PAGES.INTRODUCTION,
    },
    {
      name: PAGES.INTRODUCTION_APP_PROVIDER,
    },
    {
      name: PAGES.INTRODUCTION_CONFORMITY_BODY,
    },
    {
      name: PAGES.INTRODUCTION_OSP_BODY,
    },
    {
      name: PAGES.INTRODUCTION_PARTICIPANT,
    },
    {
      name: PAGES.INTRODUCTION_SERVICE_PROVIDER,
    },
    {
      name: PAGES.USE_CASE,
    },
    {
      name: PAGES.USE_CASE_TRACABILITY,
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
    {
      name: PAGES.SERVICE_DETAIL,
      param: 'serviceId',
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
      name: PAGES.DATA_SPACE,
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
      name: PAGES.CONSENT_OSP,
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
  ],
  MAIN_MENU: [
    { name: PAGES.HOME },
    {
      name: PAGES.INTRODUCTION,
      children: [
        { name: PAGES.INTRODUCTION_PARTICIPANT, hint: HINTS.NEW },
        { name: PAGES.INTRODUCTION_APP_PROVIDER, hint: HINTS.NEW },
        { name: PAGES.INTRODUCTION_SERVICE_PROVIDER, hint: HINTS.NEW },
        { name: PAGES.INTRODUCTION_CONFORMITY_BODY, hint: HINTS.NEW },
        { name: PAGES.INTRODUCTION_OSP_BODY, hint: HINTS.NEW },
      ],
    },
    {
      name: PAGES.USE_CASE,
      children: [{ name: PAGES.USE_CASE_TRACABILITY, hint: HINTS.NEW }],
    },
    { name: PAGES.DATA_SPACE },
    {
      name: PAGES.MARKETPLACE,
      children: [
        { name: PAGES.APP_MARKETPLACE },
        { name: PAGES.SERVICE_MARKETPLACE, hint: HINTS.NEW },
      ],
    },
    {
      name: PAGES.DATA_MANAGEMENT,
      children: [{ name: PAGES.SEMANTICHUB }],
    },
    { name: PAGES.PARTNER_NETWORK },
    {
      name: PAGES.APP_MANAGEMENT,
      children: [
        { name: PAGES.APP_OVERVIEW, hint: HINTS.NEW },
        { name: PAGES.APP_RELEASE_PROCESS },
        { name: PAGES.APP_SUBSCRIPTION, hint: HINTS.NEW },
        { name: PAGES.APP_ADMIN_BOARD, hint: HINTS.NEW },
      ],
    },
    {
      name: PAGES.SERVICE_MANAGEMENT,
      children: [
        { name: PAGES.SERVICE_OVERVIEW, hint: HINTS.NEW },
        { name: PAGES.SERVICE_RELEASE_PROCESS, hint: HINTS.NEW },
        { name: PAGES.SERVICE_SUBSCRIPTION, hint: HINTS.NEW },
        { name: PAGES.SERVICE_ADMIN_BOARD, hint: HINTS.NEW },
      ],
    },
  ],
  USER_MENU: [
    PAGES.ACCOUNT,
    PAGES.ORGANIZATION,
    PAGES.COMPANY_SUBSCRIPTIONS,
    PAGES.NOTIFICATIONS,
    PAGES.USER_MANAGEMENT,
    PAGES.IDP_MANAGEMENT,
    PAGES.CONNECTOR_MANAGEMENT,
    PAGES.APPLICATION_REQUESTS,
    PAGES.CLEARINGHOUSE_SELF_DESCRIPTION,
    PAGES.INVITE,
    PAGES.COMPANY_ROLE,
    PAGES.USECASE_PARTICIPATION,
    PAGES.CERTIFICATE_CREDENTIAL,
    PAGES.ADMIN_CREDENTIAL,
    PAGES.COMPANY_CERTIFICATE,
    PAGES.COMPANY_WALLET,
    PAGES.COMPANY_DATA,
    PAGES.ONBOARDING_SERVICE_PROVIDER_MANAGEMENT,
    PAGES.LOGOUT,
  ],
  FOOTER_MENU: [
    PAGES.HELP,
    PAGES.CONTACT,
    PAGES.IMPRINT,
    PAGES.PRIVACY,
    PAGES.TERMS,
    PAGES.COOKIE_POLICY,
    PAGES.ABOUTPAGE,
  ],
};
