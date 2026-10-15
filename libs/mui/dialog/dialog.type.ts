import type { DialogProps as MuiDialogProps } from '@mui/material';

export type DialogScroll = NonNullable<MuiDialogProps['scroll']>;

export type DialogMaxWidth = MuiDialogProps['maxWidth'];

export type DialogWidthInput = {
  fullWidth?: boolean;
  maxWidth: DialogMaxWidth;
  isMobile: boolean;
  fullWidthSize: string;
};
