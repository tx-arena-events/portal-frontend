import type { PropsWithChildren } from 'react';
import type { IPage } from '../models';
import { useAuth } from '../hooks';

type Props = PropsWithChildren<Pick<IPage, 'allowTo'>>;

export function RequireAccess(props: Props) {
  const { allowTo, children } = props;
  const { user } = useAuth();

  if (allowTo && !allowTo(user)) {
    // TODO: decide what a user without access sees.
    return null;
  }

  return children;
}
