import { useCallback, useMemo } from 'react';
import type { IPage } from '../libs/models';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { config, pageRegistry, useAuth } from '../libs';

export function Router() {
  const { user } = useAuth();

  const renderPage = useCallback((page: IPage) => {
    const Component = pageRegistry[page.name];
    if (!Component) {
      return null;
    }
    const { name, path = name, param, props } = page;
    return (
      <Route
        key={name}
        path={param ? `${path}/:${param}?` : path}
        element={<Component {...props} />}
      />
    );
  }, []);

  const allPages = useMemo(() => {
    return config.ALL_PAGES.filter((page) => page?.allowTo?.(user) ?? true).map(
      renderPage,
    );
  }, []);

  return (
    <BrowserRouter>
      <Routes>{allPages}</Routes>
    </BrowserRouter>
  );
}
