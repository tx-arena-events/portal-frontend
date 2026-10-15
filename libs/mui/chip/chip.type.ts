import type { ChipProps as MuiChipProps } from '@mui/material';
import type { SvgIconComponent } from '@mui/icons-material';

export type ChipType = 'decline' | 'confirm' | 'plain' | 'delete' | 'progress';
export type ChipVariant = NonNullable<MuiChipProps['variant']>;
export type ChipColor = NonNullable<MuiChipProps['color']>;
export type ChipStatusPalette = 'declined' | 'confirmed' | 'info';
export type ChipIcon = SvgIconComponent;
