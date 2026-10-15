import type { PaletteOptions, Theme } from '@mui/material';

// Type stub for @catena-x/portal-shared-components (mapped via tsconfig `paths`).
// The package's own .d.ts files declare ambient modules that replace
// @mui/material/styles project-wide, so only what we use is declared here.
// Only theme data is used: the package bundles react-dom 18 and its
// components cannot render under React 19.
// TODO: remove together with the package once it is refactored.
export declare const paletteDefinitions: PaletteOptions;

export declare const theme: Theme;
