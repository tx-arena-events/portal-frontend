import { type RestrictedItem } from './restricted-item.model';

export type IAction = RestrictedItem & {
  // element: JSX.Element;
  value?: string;
};
