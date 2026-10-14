import { Fragment } from 'react';

type Props = {};

export function MobileHeader(props: Props) {
  const {} = props;

  return (
    <div className="mobileNav">
      <Fragment key="Logo - Mobile" />
      <div className="mobileHeaderRight">
        <Fragment key="Search - Mobile" />
      </div>
    </div>
  );
}
