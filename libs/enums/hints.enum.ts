export const HINTS = {
  NEW: 'new',
  COMING_SOON: 'coming_soon',
} as const;

export type HINTS = (typeof HINTS)[keyof typeof HINTS];
