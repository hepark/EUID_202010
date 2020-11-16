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

// ----------------------------------------------------------

// 유틸리티 함수
// 1. 유사배열 -> 배열
// 유사배열에서 배열의 메서드를 사용하고 싶다
// Array.from() 메서드를 사용하고 싶으나 IE 호환성에서 문제가 있다
// 안전하게 유틸리티 함수를 만들어 사용한다.
// var makeArray = function (arrayLikeObject) {
//   return [].slice.call(arrayLikeObject)
// }

// 셔플(섞는다) 함수
// 어떻게 섞을 수 있을까??
