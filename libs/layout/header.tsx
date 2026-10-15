import { NavLink } from 'react-router-dom';
import { Fragment } from 'react';
import { toMenuTree } from '../helpers';
import { useI18n } from '../hooks';
import type { Tree } from '../models';
import { Button, MainNavigation } from '../mui';
import { DOCUMENTATION_URL } from './layout.constants.ts';
import { Logo, UserInfo } from './header/index.ts';
import './header.css';

type Props = {
  main: Array<Tree>;
};

export function Header(props: Props) {
  const { main } = props;
  const { t } = useI18n();

  const openDocumentation = () => {
    window.open(DOCUMENTATION_URL, 'documentation', 'noreferrer');
  };

  return (
    <header>
      <MainNavigation items={toMenuTree(main, t)} component={NavLink}>
        <Logo />
        <div className="d-flex">
          <Fragment key="Search" />
          <Button
            size="small"
            color="secondary"
            className="documentation"
            onClick={openDocumentation}
          >
            {t('pages:help')}
          </Button>
          <UserInfo />
        </div>
      </MainNavigation>
    </header>
  );
}
