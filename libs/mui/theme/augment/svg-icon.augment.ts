import type {} from '@mui/material/SvgIcon';

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    default: true;
  }
  interface SvgIconPropsSizeOverrides {
    '8': true;
    '10': true;
    '12': true;
    '14': true;
    '16': true;
    '18': true;
    '20': true;
  }
}
