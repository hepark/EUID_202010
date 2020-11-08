// 기본 내보내기가 아닐 경우
export * from './dom';
export * from './detectMobileOrDesktop';

// 기본 내보내기인 경우
export { default as logError } from './logError';
export { default as devProd } from './devProd';
export { default as delay } from './delay';
