import { NavLink } from 'react-router-dom';
import { resolveLogoUrl } from '../../helpers';

export function Logo() {
  const image = resolveLogoUrl();

  return (
    <NavLink to="/">
      <img src={image} />
    </NavLink>
  );
}
