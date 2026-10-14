export type RestrictedItem = {
  name: string;
  allowTo?: () => boolean;
};
