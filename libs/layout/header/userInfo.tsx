import { Box } from '@mui/material';
import { Fragment } from 'react';

type Props = {
  pages: Array<string>;
};

export function UserInfo(props: Props) {
  const { pages } = props;

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
