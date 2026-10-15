import type { PropsWithChildren } from 'react';
import {
  ErrorBoundary as BaseBoundary,
  type FallbackProps,
} from 'react-error-boundary';
import { ErrorFallback } from './error-fallback';

function BoundaryFallback(props: FallbackProps) {
  const { resetErrorBoundary } = props;

  return <ErrorFallback onRetry={resetErrorBoundary} />;
}

// Catches render errors outside the router (providers). Route errors are
// handled by RouteError as the router's errorElement.
export function ErrorBoundary(props: Readonly<PropsWithChildren>) {
  const { children } = props;

  return (
    <BaseBoundary FallbackComponent={BoundaryFallback}>{children}</BaseBoundary>
  );
}
