import { BREAKPOINTS } from 'constants/index';

export const isMobile = () => window.innerWidth < BREAKPOINTS;
export const isDesktop = () => !isMobile();
