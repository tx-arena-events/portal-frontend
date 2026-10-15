import { Dialog as MuiDialog, useMediaQuery, useTheme } from '@mui/material';
import { mergeSx } from '../shared';
import {
  DIALOG_FULL_WIDTH_GUTTER,
  DIALOG_MOBILE_QUERY,
} from './dialog.constants';
import { DIALOG_DEFAULT_SCROLL } from './dialog.defaults';
import { resolveDialogWidth } from './dialog.helper';
import type { DialogProps } from './dialog.props';
import { dialogPaperSx } from './dialog.styles';

export function Dialog(props: DialogProps) {
  const {
    scroll = DIALOG_DEFAULT_SCROLL,
    fullWidth,
    maxWidth,
    sx,
    ...rest
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(DIALOG_MOBILE_QUERY);

  const fullWidthSize = `calc(100vw - ${theme.spacing(DIALOG_FULL_WIDTH_GUTTER)})`;
  const width = resolveDialogWidth({
    fullWidth,
    maxWidth,
    isMobile,
    fullWidthSize,
  });

  return (
    <MuiDialog
      scroll={scroll}
      maxWidth={fullWidth ? 'xl' : maxWidth}
      sx={mergeSx(dialogPaperSx(width, maxWidth, fullWidthSize), sx)}
      {...rest}
    />
  );
}
