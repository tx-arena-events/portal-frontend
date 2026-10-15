import type { SxProps, Theme } from '@mui/material';

function toSxArray(sx?: SxProps<Theme>) {
  if (sx === undefined) return [];
  return Array.isArray(sx) ? sx : [sx];
}

// Combines wrapper defaults with caller sx; caller wins. Supports object, array and function sx.
export function mergeSx(
  base: SxProps<Theme>,
  override?: SxProps<Theme>,
): SxProps<Theme> {
  return [...toSxArray(base), ...toSxArray(override)];
}
