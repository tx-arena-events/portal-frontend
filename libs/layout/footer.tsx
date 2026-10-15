import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import type { PAGES } from '../enums';
import { toMenuItems } from '../helpers';
import { useI18n } from '../hooks';
import { Navigation } from '../mui';
import { FOOTER_HEAD_IMAGE } from './layout.constants.ts';
import './footer.css';

type Props = {
  pages: Array<PAGES>;
};

export function Footer(props: Props) {
  const { pages } = props;
  const { t } = useI18n();

  return (
    <footer>
      <Fragment key="ScrollToTopButton" />
      <img className="footer-head" src={FOOTER_HEAD_IMAGE} alt="" />
      <div className="footer-content">
        <Navigation
          unstyled
          items={toMenuItems(pages, t)}
          component={NavLink}
        />
        <span className="copyright">{t('footer:copyright')}</span>
      </div>
    </footer>
  );
}
