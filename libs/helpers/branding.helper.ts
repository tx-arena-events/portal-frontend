import { ENV } from '../env';

export function resolveLogoUrl(fallback: string): string {
  return ENV.getLogoUrl || fallback;
}
