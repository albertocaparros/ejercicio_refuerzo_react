import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  justify-items: center;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: auto auto;
  }
`;
