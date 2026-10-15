import { PAGES, ROLES } from '../../enums';
import { hasRegistrationRole } from '../../helpers';
import type { IPage } from '../../models';

export const PUBLIC_PAGES: Array<IPage> = [
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
    name: PAGES.DATA_SPACE,
  },
  {
    name: PAGES.CONSENT_OSP,
  },
];
