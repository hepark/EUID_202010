/**
 * 유사배열 → 배열화(변경) → 새로운 배열 반환
 * HTMLCollection, NodeList, arguments
 * makeArray(documnet.querySelectorAll('a'))
 */
var makeArray = function (arrayLikeObject) {
  // 로직?
  // 배열.slice()
  // 슬라이스는 배열의 능력????
  // 유사배열에 쓸 수 없을까???
  // 인간의 능력을 공룡이 쓸 수 없을까?
  // 메서드 빌려쓰기 패턴 활용
  // return 새로운 배열
  return [].slice.call(arrayLikeObject)
}
