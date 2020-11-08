/**
 * DOM에서 문서 대상을 찾기 위한 유틸리티
 * @param {String} selector CSS 선택자
 * @param {Node} context Document, ElementNode
 * @example
 *   getNodeList('.block__element')
 */
const getNodeList = (selector, context = document) =>
  context.querySelectorAll(selector);

export default getNodeList;
