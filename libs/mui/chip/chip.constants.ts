import Autorenew from '@mui/icons-material/Autorenew';
// MUI 9 merged CheckCircleOutline into CheckCircleOutlined (same motif).
import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined';
import HighlightOff from '@mui/icons-material/HighlightOff';
import type { ChipIcon, ChipStatusPalette, ChipType } from './chip.type';

export const CHIP_TYPE_ICONS: Partial<Record<ChipType, ChipIcon>> = {
  decline: HighlightOff,
  confirm: CheckCircleOutlined,
  progress: Autorenew,
};

export const CHIP_TYPE_PALETTE: Partial<Record<ChipType, ChipStatusPalette>> = {
  decline: 'declined',
  confirm: 'confirmed',
  progress: 'info',
};
export const CHIP_RADIUS = '36px';
export const CHIP_PROGRESS_RADIUS = '6px';
