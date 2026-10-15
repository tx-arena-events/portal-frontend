import { readEnv } from './helpers/env.helper.ts';

export const ENV = {
  isRequireHttpsUrlPattern: readEnv('REQUIRE_HTTPS_URL_PATTERN'),
  isClearinghouseConnectDisabled: readEnv('CLEARINGHOUSE_CONNECT_DISABLED'),
  getAssetBase: readEnv('PORTAL_ASSETS_URL'),
  getApiBase: readEnv('PORTAL_BACKEND_URL'),
  getCentralIdp: readEnv('CENTRALIDP_URL'),
  getSSICredentialBase: readEnv('SSI_CREDENTIAL_URL'),
  getBpdmPoolApiBase: readEnv('BPDM_POOL_API_URL'),
  getBpdmGateApiBase: readEnv('BPDM_GATE_API_URL'),
  getSemanticApiBase: readEnv('SEMANTICS_URL'),
  getMiwBase: readEnv('MANAGED_IDENTITY_WALLETS_NEW_URL'),
  getRealm: readEnv('REALM'),
  getClientId: readEnv('CLIENT_ID'),
  getClientIdRegistration: readEnv('CLIENT_ID_REGISTRATION'),
  getClientIdSemantic: readEnv('CLIENT_ID_SEMANTIC'),
  getClientIdBpdm: readEnv('CLIENT_ID_BPDM'),
  getClientIdMiw: readEnv('CLIENT_ID_MIW'),
  getClientIdSsiCredential: readEnv('CLIENT_ID_SSI_CREDENTIAL'),
  getLogoUrl: readEnv('LOGO_URL'),
} as const;
