import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { config, I18nProvider, store } from '../libs';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nProvider
        fallbackLang={config.fallbackLng}
        supportedLangs={config.languages}
        resources={config.languageResources}
      >
        <App />
      </I18nProvider>
    </Provider>
  </StrictMode>,
);
