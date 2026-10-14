import { type ComponentType } from 'react';

export const pageRegistry: Partial<Record<string, ComponentType>> = {
  // [PAGES.HOME]: lazy(() => import('../../src/pages/Home')),
};
