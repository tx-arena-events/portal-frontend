import { createBrowserRouter } from 'react-router-dom';
import { config, Layout, NOT_FOUND_ROUTE, RouteError, toRoutes } from '../libs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // Last resort: only reached when the layout itself fails.
    errorElement: <RouteError />,
    children: [
      {
        // Page errors replace the page content, the layout stays.
        errorElement: <RouteError />,
        children: [...toRoutes(config.ALL_PAGES), NOT_FOUND_ROUTE],
      },
    ],
  },
]);
