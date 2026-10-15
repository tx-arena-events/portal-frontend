import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { theme } from './theme';

export function ThemeProvider(props: Readonly<PropsWithChildren>) {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
