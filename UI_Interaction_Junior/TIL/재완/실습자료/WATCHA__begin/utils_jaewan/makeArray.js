/**
 * 유사배열 -> 배열화(변경) -> 새로운 배열 반환
 * slice는 원본 파괴 안함
 */

var makeArray = function (arrayLikeObject) {
  // 메서드 빌려쓰기 패턴 활용
  return [].slice().call(arrayLikeObject)
}
