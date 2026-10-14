import keycloak from 'keycloak-js';
import { config } from '../config.ts';

class KeycloakServiceClass {
  private readonly instance: keycloak;

  constructor(url: string, realm: string, clientId: string) {
    this.instance = new keycloak({
      url,
      realm,
      clientId,
    });
  }

  public init(): Promise<boolean> {
    let initPromise: Promise<boolean> | null = null;
    initPromise ??= this.instance.init({
      onLoad: 'login-required',
      pkceMethod: 'S256',
    });
    return initPromise;
  }

  public login(): void {
    this.instance.login();
  }

  public logout(): void {
    this.instance.logout();
  }

  public getToken(): string | undefined {
    return this.instance.token;
  }
}

export const KeycloakService = new KeycloakServiceClass(
  config.ENV.getCentralIdp,
  config.ENV.getRealm,
  config.ENV.getClientId,
);
