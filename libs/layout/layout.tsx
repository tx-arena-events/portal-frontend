import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useDocumentTitle, useMenu } from '../hooks';
import { Footer } from './footer.tsx';
import { Header } from './header';
import { MobileHeader } from './mobile-header';
import './layout.css';

export function Layout() {
  useDocumentTitle('app:title');
  const menu = useMenu();

  return (
    <>
      <Header main={menu.main} />
      <MobileHeader />
      <Fragment key="RegistrationReviewNoteSection">
        <Fragment key="RegistrationReview">
          <Fragment key="RegistrationReviewContent" />
        </Fragment>
      </Fragment>
      <Fragment key="RegistrationReviewOverlay" />
      <Fragment key="RegistrationDeclinedOverlay" />

      <Fragment key="MainSearchOverlay" />

      <Fragment key="If Page not Logout"></Fragment>

      <Fragment key="If Page is Logout">
        <Fragment key="Logout" />
      </Fragment>

      <Outlet />
      <Footer pages={menu.footer} />
      <Fragment key="MainOverlay" />
      <Fragment key="MainNotify" />
      <Fragment key="MenuInfo" />
    </>
  );
}
