import type { ChipProps as MuiChipProps } from '@mui/material';
import { createElement, type ReactElement } from 'react';
import { CHIP_TYPE_ICONS } from './chip.constants';
import type { ChipType } from './chip.type';

export function resolveChipIcon(
  type: ChipType,
  withIcon: boolean,
): ReactElement | undefined {
  const icon = CHIP_TYPE_ICONS[type];
  return withIcon && icon ? createElement(icon) : undefined;
}

// Only `delete` chips show the delete action.
export function resolveChipDelete(
  type: ChipType,
  onDelete: MuiChipProps['onDelete'],
): MuiChipProps['onDelete'] {
  return type === 'delete' ? onDelete : undefined;
}
