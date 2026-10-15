import { ErrorBoundary as BaseBoundary } from 'react-error-boundary';
import { type PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export function Errorboundary(props: Props) {
  const { children } = props;

  return <BaseBoundary>{children}</BaseBoundary>;
}
