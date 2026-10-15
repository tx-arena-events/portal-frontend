import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { router } from './Router.tsx';
import {
  AuthProvider,
  config,
  I18nProvider,
  store,
  ThemeProvider,
} from '../libs';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

declare global {
  interface Window {
    __ENV__?: Partial<Record<string, string>>;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <I18nProvider
          fallbackLang={config.fallbackLng}
          supportedLangs={config.languages}
          resources={config.languageResources}
        >
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </I18nProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
