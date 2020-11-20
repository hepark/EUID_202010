const getNodeList = (selector, context = document) =>
  context.querySelectorAll(selector)

export default getNodeList
