import { Fragment } from 'react';
import { Logo } from './header/index.ts';

export function MobileHeader() {
  return (
    <div className="mobileNav">
      <Logo />
      <div className="mobileHeaderRight">
        <Fragment key="Search - Mobile" />
        <Fragment key="MobileMenu" />
      </div>
    </div>
  );
}
