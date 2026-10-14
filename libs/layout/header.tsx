import { Fragment } from 'react';
import { UserInfo } from './header/index.ts';

type Props = {
  user: Array<string>;
};

export function Header(props: Props) {
  const { user } = props;

  return (
    <header>
      <Fragment key="MainNavigation">
        <Fragment key="Logo" />
        <div className="d-flex">
          <Fragment key="Search" />
          <Fragment key="Documentation" />
          <UserInfo pages={[]} />
        </div>
      </Fragment>
    </header>
  );
}
