/* -------------------------------------------------------------------------- */
/* 참고: https://bit.ly/ES6-re-exporting                                       */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
// 기본 내보내기가 없는 경우

export * from './dom';
export * from './detectMobileOrDesktop';

/* -------------------------------------------------------------------------- */
// 기본 내보내기로 내보낸 경우

export { default as ellipseText } from './ellipseText';
export { default as delay } from './delay';
export { default as logError } from './logError';
export { default as fetchData } from './fetchData';
export { default as axeAutoTest } from './axeAutoTest';
export { default as devProd } from './devProd';
