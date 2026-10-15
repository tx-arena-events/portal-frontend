import { Grid as MuiGrid } from '@mui/material';
import { GRID_DEFAULT_SPACING } from './grid.defaults';
import type { GridProps } from './grid.props';

export function Grid(props: GridProps) {
  const { spacing = GRID_DEFAULT_SPACING, ...rest } = props;

  return <MuiGrid spacing={spacing} {...rest} />;
}
