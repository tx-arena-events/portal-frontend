import { ENV } from '../env';
import { config } from '../config';

export function resolveLogoUrl(): string {
  return ENV.getLogoUrl || config.LOGO_URL;
}
