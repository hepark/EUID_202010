/**
 * DOM에서 문서 대상을 찾기 위한 유틸리티
 * @param {String} selector CSS 선택자
 * @param {Node} context Document, ElementNode
 * @example
 *   getNode('#idName')
 *   getNode('.block__element a')
 */
const getNode = (selector, context = document) =>
  context.querySelector(selector);

export default getNode;
