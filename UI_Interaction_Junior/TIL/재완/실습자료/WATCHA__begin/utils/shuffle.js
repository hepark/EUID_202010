// 배열의 아이템을 뒤섞어서 새로운 배열 반환
var shuffle = function(array) {
  return array.slice().sort(function() {
    return Math.random() - 0.5;
  })
};