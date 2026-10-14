import './App.css';
import { Layout, useI18n } from '../libs';
import { useEffect } from 'react';
import { Router } from './Router.tsx';

function App() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = t('app:title');
  }, [t]);

  return (
    <Layout>
      <Router />
      <section id="center">
        <div>
          <h1>{t('app:title')}</h1>
        </div>
      </section>
    </Layout>
  );
}

export default App;
