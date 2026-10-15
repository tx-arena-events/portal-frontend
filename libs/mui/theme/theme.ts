import { createTheme } from '@mui/material/styles';
import {
  paletteDefinitions,
  theme as sharedTheme,
} from '@catena-x/portal-shared-components';
import './augment';
import { MuiCssBaseline } from './baseline';

// Values come from portal-shared-components (built against MUI 7) and are
// rebuilt with our own createTheme so MUI 9 gets a theme of its own shape.
// TODO: replace with own definitions once portal-shared-components is refactored.
export const theme = createTheme({
  breakpoints: { values: sharedTheme.breakpoints.values },
  palette: paletteDefinitions,
  typography: sharedTheme.typography,
  shape: sharedTheme.shape,
  components: { ...sharedTheme.components, MuiCssBaseline },
});
