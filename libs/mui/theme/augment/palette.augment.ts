import type {} from '@mui/material/styles';

// Mirrors portal-shared-components' palette augmentation for our MUI version.
declare module '@mui/material/styles' {
  interface TypeIcons {
    icon01: string;
    icon02: string;
    icon03: string;
  }
  interface TypeBrand {
    brand01: string;
    brand02: string;
  }
  interface TypeDanger {
    danger: string;
    dangerHover: string;
    dangerBadge: string;
  }
  interface TypeSupport {
    success: string;
    error: string;
    info: string;
    warning: string;
  }
  interface TypeBorders {
    border01: string;
    border02: string;
    border03: string;
    border04: string;
  }
  interface TypeStepper {
    stepDone: string;
    stepCurrent: string;
    stepUpcoming: string;
  }
  interface TypeTextField {
    placeholderText: string;
    helperText: string;
    background: string;
    backgroundHover: string;
  }
  interface TypeAccent {
    accent01: string;
    accent02: string;
    accent03: string;
    accent04: string;
    accent05: string;
    accent06: string;
    accent07: string;
    accent08: string;
    accent09: string;
    accent10: string;
    accent11: string;
    accent12: string;
  }
  interface TypeSelected {
    hover: string;
    focus: string;
    active: string;
  }
  interface TypeStatusColor {
    main: string;
    contrastText: string;
  }
  interface TypeChipCardColor {
    release: string;
    active: string;
    inactive: string;
    created: string;
    inReview: string;
    enabled: string;
    default: string;
    bgRelease: string;
    bgActive: string;
    bgInactive: string;
    bgCreated: string;
    bgInReview: string;
    bgEnabled: string;
    bgDefault: string;
  }
  interface TypeButtonColor {
    darkGrey: string;
    lightGrey: string;
    white: string;
    yellow: string;
  }

  interface TypeBackground {
    background01: string;
    background02: string;
    background03: string;
    background04: string;
    background05: string;
    background06: string;
    background07: string;
    background08: string;
    background09: string;
    background10: string;
    background11: string;
    background12: string;
    background13: string;
    background14: string;
  }
  interface TypeText {
    tertiary: string;
    quaternary: string;
  }
  interface PaletteColor {
    shadow?: string;
  }
  interface SimplePaletteColorOptions {
    shadow?: string;
  }

  interface Palette {
    icon: TypeIcons;
    border: TypeBorders;
    textField: TypeTextField;
    brand: TypeBrand;
    danger: TypeDanger;
    support: TypeSupport;
    accent: TypeAccent;
    selected: TypeSelected;
    pending: TypeStatusColor;
    confirmed: TypeStatusColor;
    declined: TypeStatusColor;
    label: TypeStatusColor;
    deleted: TypeStatusColor;
    chip: TypeChipCardColor;
    stepper: TypeStepper;
    buttons: TypeButtonColor;
  }
  interface PaletteOptions {
    icon?: Partial<TypeIcons>;
    border?: Partial<TypeBorders>;
    textField?: Partial<TypeTextField>;
    brand?: Partial<TypeBrand>;
    danger?: Partial<TypeDanger>;
    support?: Partial<TypeSupport>;
    accent?: Partial<TypeAccent>;
    selected?: Partial<TypeSelected>;
    pending?: Partial<TypeStatusColor>;
    confirmed?: Partial<TypeStatusColor>;
    declined?: Partial<TypeStatusColor>;
    label?: Partial<TypeStatusColor>;
    deleted?: Partial<TypeStatusColor>;
    chip?: Partial<TypeChipCardColor>;
    stepper?: Partial<TypeStepper>;
    buttons?: Partial<TypeButtonColor>;
  }
}
