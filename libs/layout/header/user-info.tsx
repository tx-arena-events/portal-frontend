import { Fragment } from 'react';
import { Box } from '../../mui';
import './user-info.css';

export function UserInfo() {
  return (
    <Box className="UserInfo">
      <Fragment key="UserAvatar" />
      <Fragment key="UserMenu">
        <Fragment key="UserNav" />
        <Fragment key="LanguageSwitch" />
      </Fragment>
    </Box>
  );
}
