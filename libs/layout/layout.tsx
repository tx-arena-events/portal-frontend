import { Header } from './header';
import { MobileHeader } from './mobile-header';
import { Fragment, type PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer.tsx';

type Props = PropsWithChildren;

export function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header user={[]} />
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
      {children}
      <Footer />
      <Fragment key="MainOverlay" />
      <Fragment key="MainNotify" />
      <Fragment key="MenuInfo" />
    </>
  );
}
