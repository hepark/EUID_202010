import { BREAKPOINT } from 'constants/index';
const { innerWidth } = window;

export const isMobile = () => innerWidth < BREAKPOINT;
export const isDesktop = () => innerWidth >= BREAKPOINT;
