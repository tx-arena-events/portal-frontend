import { createBrowserRouter } from 'react-router-dom';
import { config, Errorboundary, Layout, toRoutes } from '../libs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorboundary />,
    hasErrorBoundary: true,
    children: toRoutes(config.ALL_PAGES),
  },
]);
