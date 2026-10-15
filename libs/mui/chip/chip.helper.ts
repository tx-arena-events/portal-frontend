import type { ChipProps as MuiChipProps } from '@mui/material';
import { CHIP_TYPE_ICONS } from './chip.constants';
import type { ChipIcon, ChipType } from './chip.type';

export function resolveChipIcon(
  type: ChipType,
  withIcon: boolean,
): ChipIcon | undefined {
  return withIcon ? CHIP_TYPE_ICONS[type] : undefined;
}

// Only `delete` chips show the delete action.
export function resolveChipDelete(
  type: ChipType,
  onDelete: MuiChipProps['onDelete'],
): MuiChipProps['onDelete'] {
  return type === 'delete' ? onDelete : undefined;
}
