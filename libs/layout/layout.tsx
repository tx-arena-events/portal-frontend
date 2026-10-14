import { Header } from './header';
import { MobileHeader } from './mobile-header';
import { Fragment, type PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './footer.tsx';
import { config } from '../config.ts';

type Props = PropsWithChildren;

export function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <MobileHeader />
      <Fragment key="MainSearchOverlay" />
      <Outlet />
      {children}
      {JSON.stringify(config, null, 4)}
      <Footer />
      <Fragment key="MainOverlay" />
      <Fragment key="MainNotify" />
      <Fragment key="MenuInfo" />
    </>
  );
}
