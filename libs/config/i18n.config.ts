import type { Resource } from 'i18next';
import AppGerman from '../locale/de/app.json';
import AppEnglish from '../locale/en/app.json';
import ErrorGerman from '../locale/de/error.json';
import ErrorEnglish from '../locale/en/error.json';
import FooterGerman from '../locale/de/footer.json';
import FooterEnglish from '../locale/en/footer.json';
import HintsGerman from '../locale/de/hints.json';
import HintsEnglish from '../locale/en/hints.json';
import PagesGerman from '../locale/de/pages.json';
import PagesEnglish from '../locale/en/pages.json';

export const LANGUAGES = ['en', 'de'];

export const FALLBACK_LANGUAGE = 'en';

export const LANGUAGE_RESOURCES: Resource = {
  de: {
    error: {
      ...ErrorGerman,
    },
    app: {
      ...AppGerman,
    },
    footer: {
      ...FooterGerman,
    },
    hints: {
      ...HintsGerman,
    },
    pages: {
      ...PagesGerman,
    },
  },
  en: {
    error: {
      ...ErrorEnglish,
    },
    app: {
      ...AppEnglish,
    },
    footer: {
      ...FooterEnglish,
    },
    hints: {
      ...HintsEnglish,
    },
    pages: {
      ...PagesEnglish,
    },
  },
};
