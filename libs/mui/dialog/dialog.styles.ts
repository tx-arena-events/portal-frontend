import type { SxProps, Theme } from '@mui/material';
import { DIALOG_BORDER_RADIUS } from './dialog.constants';
import { hasMaxWidth } from './dialog.helper';
import type { DialogMaxWidth } from './dialog.type';

export function dialogPaperSx(
  width: string,
  maxWidth: DialogMaxWidth,
  fullWidthSize: string,
): SxProps<Theme> {
  return {
    '.MuiPaper-root': {
      borderRadius: DIALOG_BORDER_RADIUS,
      width,
      maxWidth: hasMaxWidth(maxWidth) ? undefined : fullWidthSize,
      overflowWrap: 'break-word',
    },
  };
}
