import { Suspense } from 'react';
import type { RouteObject } from 'react-router-dom';
import type { IPage } from '../models';
import { RequireAccess } from '../components/require-access.tsx';
import { pageRegistry } from './page.registry.ts';

function toRoute(page: IPage): RouteObject | null {
  const Component = pageRegistry[page.name];
  if (!Component) return null;

  const { name, path = name, param, props, allowTo } = page;
  return {
    path: param ? `${path}/:${param}?` : path,
    element: (
      <RequireAccess allowTo={allowTo}>
        <Suspense>
          <Component {...props} />
        </Suspense>
      </RequireAccess>
    ),
  };
}

export function toRoutes(pages: Array<IPage>): Array<RouteObject> {
  return pages
    .map(toRoute)
    .filter((route): route is RouteObject => route !== null);
}
