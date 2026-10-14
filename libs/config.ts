import AppGerman from './locale/de/app.json';
import AppEnglish from './locale/en/app.json';
import FooterGerman from './locale/de/footer.json';
import FooterEnglish from './locale/en/footer.json';
import { PAGES } from './enums';
import { type IConfig } from './models';

export const config: IConfig = {
  ENV: {
    isRequireHttpsUrlPattern: import.meta.env.VITE_REQUIRE_HTTPS_URL_PATTERN,
    isClearinghouseConnectDisabled: import.meta.env
      .VITE_CLEARINGHOUSE_CONNECT_DISABLED,
    getAssetBase: import.meta.env.VITE_ASSET_BASE_URL,
    getApiBase: import.meta.env.VITE_PORTAL_BACKEND_URL,
    getCentralIdp: import.meta.env.VITE_CENTRALIDP_URL,
    getSSICredentialBase: import.meta.env.VITE_SSI_CREDENTIAL_URL,
    getBpdmPoolApiBase: import.meta.env.VITE_BPDM_POOL_API_URL,
    getBpdmGateApiBase: import.meta.env.VITE_BPDM_GATE_API_URL,
    getSemanticApiBase: import.meta.env.VITE_SEMANTICS_URL,
    getMiwBase: import.meta.env.VITE_MANAGED_IDENTITY_WALLETS_NEW_URL,
    getRealm: import.meta.env.VITE_REALM,
    getClientId: import.meta.env.VITE_CLIENT_ID,
    getClientIdRegistration: import.meta.env.VITE_CLIENT_ID_REGISTRATION,
    getClientIdSemantic: import.meta.env.VITE_CLIENT_ID_SEMANTIC,
    getClientIdBpdm: import.meta.env.VITE_CLIENT_ID_BPDM,
    getClientIdMiw: import.meta.env.VITE_CLIENT_ID_MIW,
    getClientIdSsiCredential: import.meta.env.VITE_CLIENT_ID_SSI_CREDENTIAL,
  },
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
    },
    en: {
      app: {
        ...AppEnglish,
      },
      footer: {
        ...FooterEnglish,
      },
    },
  },
  ALL_PAGES: [
    { name: PAGES.HOME },
    {
      name: PAGES.HELP,
      props: { path: 'documentation', tab: 'documentation' },
    },
    {
      name: PAGES.APP_DETAIL,
      // allowTo: () => userHasPortalRole(ROLES.APPSTORE_VIEW),
      param: 'appId',
      props: { navigate: 'marketplace' },
    },
  ],
};
