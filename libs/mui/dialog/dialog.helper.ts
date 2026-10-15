import { DIALOG_DESKTOP_WIDTH } from './dialog.constants';
import type { DialogMaxWidth, DialogWidthInput } from './dialog.type';

export function hasMaxWidth(maxWidth: DialogMaxWidth): boolean {
  return maxWidth !== undefined && maxWidth !== false;
}

export function resolveDialogWidth(input: DialogWidthInput): string {
  const { fullWidth, maxWidth, isMobile, fullWidthSize } = input;
  if (fullWidth) return fullWidthSize;
  if (hasMaxWidth(maxWidth) || isMobile) return 'auto';
  return DIALOG_DESKTOP_WIDTH;
}
