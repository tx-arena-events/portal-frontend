import type { CSSProperties } from 'react';
import type {} from '@mui/material/styles';
import type {} from '@mui/material/Typography';

// Mirrors portal-shared-components' typography augmentation for our MUI version.
declare module '@mui/material/styles' {
  interface TypographyVariants {
    body3: CSSProperties;
    caption1: CSSProperties;
    caption2: CSSProperties;
    caption3: CSSProperties;
    label1: CSSProperties;
    label2: CSSProperties;
    label3: CSSProperties;
    label4: CSSProperties;
    label5: CSSProperties;
    helper: CSSProperties;
  }
  interface TypographyVariantsOptions {
    body3?: CSSProperties;
    caption1?: CSSProperties;
    caption2?: CSSProperties;
    caption3?: CSSProperties;
    label1?: CSSProperties;
    label2?: CSSProperties;
    label3?: CSSProperties;
    label4?: CSSProperties;
    label5?: CSSProperties;
    helper?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
    caption: false;
    caption1: true;
    caption2: true;
    caption3: true;
    label1: true;
    label2: true;
    label3: true;
    label4: true;
    label5: true;
    helper: true;
  }
}
