import { RestrictedItem } from './restrictedItem.model';
import { JSX } from 'react';

export type IAction = RestrictedItem & {
  element: JSX.Element;
  value?: string;
};
