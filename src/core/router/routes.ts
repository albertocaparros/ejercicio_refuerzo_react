import { generatePath } from 'react-router-dom';

interface SwitchRoutes {
  root: string;
  remake: string;
  original: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  remake: '/remake',
  original: '/original',
};
