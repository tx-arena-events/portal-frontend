import keycloak, { type KeycloakTokenParsed } from 'keycloak-js';
import { ENV } from '../env';

class KeycloakServiceClass {
  private readonly instance: keycloak;
  private initPromise: Promise<boolean> | null = null;

  constructor(url: string, realm: string, clientId: string) {
    this.instance = new keycloak({
      url,
      realm,
      clientId,
    });
    this.instance.onTokenExpired = () => {
      this.instance.updateToken(600).catch(() => this.instance.login());
    };
  }

  public init(): Promise<boolean> {
    // check-sso verifies an existing session in a hidden iframe instead of
    // redirecting to Keycloak on every full page load.
    this.initPromise ??= this.instance.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
      pkceMethod: 'S256',
    });
    return this.initPromise;
  }

  public get tokenParsed(): KeycloakTokenParsed | undefined {
    return this.instance.tokenParsed;
  }

  public onTokenRefreshed(callback: () => void): () => void {
    this.instance.onAuthRefreshSuccess = callback;
    return () => {
      this.instance.onAuthRefreshSuccess = undefined;
    };
  }

  public login(): void {
    void this.instance.login();
  }

  public logout(): void {
    void this.instance.logout();
  }
}

export const KeycloakService = new KeycloakServiceClass(
  ENV.getCentralIdp,
  ENV.getRealm,
  ENV.getClientId,
);
