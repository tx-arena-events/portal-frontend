import type { Components, Theme } from '@mui/material/styles';

// Global page styles from the old portal (main.scss). They live in the
// CssBaseline override because CssBaseline injects `body { margin: 0 }`
// after regular stylesheets and would win over a plain CSS rule.
export const MuiCssBaseline: Components<Theme>['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      maxWidth: 1800,
      margin: '0 auto',
    },
  },
};
