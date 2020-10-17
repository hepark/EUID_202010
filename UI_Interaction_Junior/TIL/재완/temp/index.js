function getNode(selector, context = document) {
  if (typeof selector !== 'string') {
    throw new Error('첫번째 전달인자는 문자 유형이어야 합니다.');
  }
  return context.querySelector(selector);
}
