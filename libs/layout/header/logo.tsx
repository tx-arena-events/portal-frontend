import { NavLink } from 'react-router-dom';
import { config } from '../../config';
import { resolveLogoUrl } from '../../helpers';

export function Logo() {
  const image = resolveLogoUrl(config.LOGO_URL);

  return (
    <NavLink to="/">
      <img src={image} />
    </NavLink>
  );
}
