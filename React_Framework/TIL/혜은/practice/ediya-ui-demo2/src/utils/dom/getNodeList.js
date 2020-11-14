/* Dom에서 문서 대상을 찾기 위한 유틸리티*/

const getNodeList = (selector, context = document) => {
  context.querySelectorAll(selector);
};

export default getNodeList;
