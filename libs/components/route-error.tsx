import { useRouteError } from 'react-router-dom';
import { ErrorFallback } from './error-fallback';

function reloadPage() {
  window.location.reload();
}

// errorElement of the router: rendered instead of the failed route.
export function RouteError() {
  const error = useRouteError();
  console.error(error);

  return <ErrorFallback onRetry={reloadPage} />;
}
