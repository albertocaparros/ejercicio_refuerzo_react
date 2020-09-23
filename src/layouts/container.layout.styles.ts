import { css } from 'emotion';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  grid-row: 1 / 4;
  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: ${theme.breakpoints.values.lg}px) {
    grid-template-columns: auto auto auto;
  }
`;
