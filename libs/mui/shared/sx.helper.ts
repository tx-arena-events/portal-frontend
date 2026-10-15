import type { SxProps, Theme } from '@mui/material';

// Combines wrapper defaults with caller sx; caller wins. Supports object, array and function sx.
export function mergeSx(
  base: SxProps<Theme>,
  override?: SxProps<Theme>,
): SxProps<Theme> {
  const toArray = (sx?: SxProps<Theme>) =>
    sx === undefined ? [] : Array.isArray(sx) ? sx : [sx];

  return [...toArray(base), ...toArray(override)];
}
