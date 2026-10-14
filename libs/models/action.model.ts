import { type RestrictedItem } from './restrictedItem.model';

export type IAction = RestrictedItem & {
  // element: JSX.Element;
  value?: string;
};
